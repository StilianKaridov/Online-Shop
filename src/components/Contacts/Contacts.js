import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Telephone } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { Skype } from 'react-bootstrap-icons';

export default function Contacts() {

    return (
        <Container fluid>
            <Row>
                <Col className='col-8 text-center'>
                    <h3>
                        Контакти
                    </h3>
                </Col>
            </Row>
            <hr />
            <Row className='pt-4'>
                <Col className="border-end border-2 h-100 col-3">

                    <Row>
                        <h6>
                            Информация
                        </h6>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Telephone className="d-inline-block me-3" />

                            <Link
                                to="tel:+359812345678"
                                className="text-dark"
                            >
                                0812 345 678
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Envelope className="d-inline-block me-3" />

                            <Link
                                to="mailto:dsfashion@abv.bg"
                                className="text-dark"
                            >
                                dsfashion@abv.bg
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Skype className="d-inline-block me-3" />

                            <Link
                                to="skype:dsfashion.bg?chat"
                                className="text-dark"
                            >
                                dsfashion.bg
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            Работно време на операторите за Skype: <br />
                            понеделник до петък, 09:30 до 18:00 ч.
                        </Col>
                    </Row>
                </Col>

                <Col className='ps-5' sm={6}>
                    <p>
                        Бихме се радвали на вашата обратна връзка!
                        Ако имате някакви въпроси относно нашите продукти или услуги или ако имате нужда от помощ при поръчка, моля,
                        не се колебайте да се свържете с нас.
                    </p>
                    <p>
                        Нашият екип за обслужване на клиенти е на разположение,
                        за да ви помогне от понеделник до Петък от 09:30 до 18:00 часа.
                        Можете да се свържете с нас, като ни изпратите имейл.
                    </p>
                    <p>
                        Ние ще се свържем с вас възможно най-скоро.
                        Благодарим ви, че избрахте DS Fashion за вашите нужди за онлайн пазаруване!
                    </p>


                </Col>

            </Row>
        </Container>
    );
}