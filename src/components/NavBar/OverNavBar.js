import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function OverNavBar() {

    return (
        <Row className="bg-black text-white text-center" style={{ fontSize: "14px", maxWidth: "100%", margin: "0 auto"  }}>
            <Col>
                <span style={{ paddingRight: "50px" }}>Безплатни доставка и връщане за поръчки над 89,99 лв.</span>
                <span style={{ paddingRight: "50px" }}>Доставка 1-2 работни дни</span>
                <span>-15% за първа поръчка</span>
            </Col>
        </Row>
    );
}