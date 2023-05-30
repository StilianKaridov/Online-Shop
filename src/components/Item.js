import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { cartActions } from "../reduxStore/cart-slice";
import { useDispatch } from "react-redux";

const Item = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItem({ id: props.id, name: props.name, amount: 1, price: props.price }));
    };

    return (
        <Col>
            <Card style={{ display: "flex" }}>
                <Card.Img style={{
                    float: 'left',
                    width: "150px",
                    height: "150px",
                    backgroundSize: 'cover',
                    marginLeft: "auto",
                    marginRight: "auto"
                }} src={props.image} />
                <Card.Body>

                    <Card.Text>
                        {props.description}
                        <br></br><b>Цена: {props.price} лв.</b>
                    </Card.Text>
                    <Button onClick={addToCartHandler}>Добави в количка</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Item;