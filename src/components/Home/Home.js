import React from "react";

import MainImage from '../../images/MainImage.mp4';
import css from "./file.css";
import { Container, Button } from "react-bootstrap";

export default function Home() {
    return (

        <Container fluid className="p-0" style={{ position: "relative" }}>
            <video style={{ maxWidth: "100%" }} playsInline autoPlay muted>
                <source src={MainImage} type="video/mp4" />
            </video>

            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    href="/products/muje"
                    className="button mx-2"
                    style={{ minWidth: '100px', backgroundColor: 'rgb(191, 128, 64)', border: 'none' }}>
                    Мъжки
                </Button>
                
                <Button
                    href="/products/jeni"
                    className="button mx-2"
                    style={{ minWidth: '100px', backgroundColor: 'rgb(191, 128, 64)', border: 'none' }}>
                    Дамски
                </Button>

                <Button
                    href="/products/deca"
                    className="button mx-2"
                    style={{ minWidth: '100px', backgroundColor: 'rgb(191, 128, 64)', border: 'none' }}>
                    Детски
                </Button>
            </div>
        </Container>
    );
}