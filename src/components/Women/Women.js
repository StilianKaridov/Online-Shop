import React from 'react';
import { women } from '../../data';
import { Card, Col, Container, Row } from 'react-bootstrap';

//Трябва да се подобри
export default function Women() {

    return (
        //Щe трбва да измислим нещо общо за тези li и така ще го преизползваме в другите компоненти
        <Container>
            <Row xs={1} md={4}>
                {women.map(item =>
                    <Col>
                        <Card>
                            <Card.Img>{item.url}</Card.Img>
                            <Card.Body>{item.description}</Card.Body>
                            <Card.Text>Price: {item.price}</Card.Text>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}