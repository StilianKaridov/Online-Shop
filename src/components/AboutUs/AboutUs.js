import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whoWeAreImg from '../../images/whoweare.png';
import OurPhilosophy from '../../images/ourphilosophy.jpg';
import OurAim from '../../images/ouraim.png';

export default function ShippingAndPayment() {

    return (
        <Container fluid>
            <Row className='text-center'>
                <Col>
                    <h3>
                        За нас
                    </h3>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='col-2'>
                    <img src={whoWeAreImg} alt="Information About Us" className='img-fluid' />
                </Col>

                <Col className='col-6'>
                    <p>
                        DS Fashion - твоят онлайн магазин за оригинални мъжки, дамски и детски дрехи.
                    </p>
                    <p>
                        Нашата история започва през 2023г. с една идея - да предложим на любителите на модата един удобен начин да се сдобият
                        с всички техни желания, бързо и лесно!
                        Ние сме екип от професионалисти, които имат задача да предоставят на Вас, нашите потребители,
                        най-доброто обслужване, от професионални съвети до лесна поръчка с бърза доставка!
                        Тук ще намерите голямо разнообразие от оригинални дрехи за почти всеки повод.
                    </p>
                    <p>
                        Ние сме напълно реална и легитимна българска компания - ДС ФЕШЪН ЕООД, ЕИК: 1234567, Седалище: гр. Варна 9000, район кв. Левски, ул. Студентска
                    </p>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col className='col-4'>
                    <p>
                        Тя е съвсем семпла - да предоставим на българските потребители висококачествени оригинални и модерни дрехи,
                        на любимите световноизвестни марки, като Adidas, Puma, Dior, Gucci, Nike и много други, на максимално достъпни цени!
                    </p>
                </Col>

                <Col className='col-4'>
                    <img src={OurPhilosophy} alt="Our Philosophy" className='img-fluid' />
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col className='col-3'>
                    <img src={OurAim} alt="Information About Us" className='img-fluid' />
                </Col>

                <Col className='col-5'>
                    <p>
                        Вие, нашите потребители, сте нашият основен приоритет!
                    </p>
                    <p>
                        DS Fashion цени своите клиенти и коректните отношения, затова и сайтът предлага богата гама продукти
                        с гарантирано качество и доказан произход.
                        Стараем се да Ви представим нашите предложения така, че да можете да направите своя избор бързо и лесно.
                        За нас най-важно е Вие, клиентите, да получите качествени оригинални дрехи на
                        ТОП цени и нашите продукти са точно такива - 100% оригинални.
                    </p>
                    <p>
                        Богатият ни асортимент ще покрие нуждите Ви и ще задоволи високите Ви изисквания.
                        Можете да сте сигурни, че в DS Fashion ще откриете най-новите модели на страхотни цени!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}