import React, { useEffect, useState } from 'react';
import {CardGroup, Row } from 'react-bootstrap';
import Item from '../Item';

//Трябва да се подобри
export default function Women(props) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(
                'http://localhost:3001/items/women'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedItems = [];

            for (const key in responseData) {
                loadedItems.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setItems(loadedItems);
            setIsLoading(false);
        };


        fetchItems().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className='h-100 d-flex align-items-center justify-content-center'>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <div className='h-100 d-flex my-auto align-items-center justify-content-center'>
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <CardGroup>
            <Row xs={1} md={4} className="g-4 m-3">

                {items.map((item) => (
                        <Item
                            id={item.id}
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price} />
                ))}
            </Row>
        </CardGroup>
    );
}