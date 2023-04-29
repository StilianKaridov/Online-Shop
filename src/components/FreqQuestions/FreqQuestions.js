import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { ArrowDownShort } from 'react-bootstrap-icons';

export default function FreqQuestions() {
    const [open, setOpen] = useState(false);

    const handleToggle = (id) => {
        if (open === id) {
            setOpen(null);
        } else {
            setOpen(id);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col className='col-8 text-center'>
                    <h3>
                        Често задавани въпроси
                    </h3>
                </Col>
            </Row>
            <hr />
            <Row className='pt-5'>
                <Col className="col-8" onClick={() => handleToggle(1)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        Описанието и снимките на продукта, които сте предоставили в сайта отговарят ли реално на това, което ще получа?
                    </h6>
                </Col>
                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 1 && (
                            <div id="secondary-content">
                                <p>
                                    Всички снимки и цялата информация са внимателно подготвени и подбрани с цел
                                    Клиента да има възможност да добие максимално ясна и точна представа за дадения продукт.
                                    Ние гарантираме, че снимките и информацията отговарят 100% на това, което ще получите.
                                    В голяма част от случаите нашите клиенти твърдят, че когато получат продукта на живо,
                                    той изглежда дори по-добре отколкото на снимките.
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
            <Row>
                <Col className="col-8" onClick={() => handleToggle(2)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        Оригинални ли са продуктите, които предлагате?
                    </h6>
                </Col>

                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 2 && (
                            <div id="secondary-content">
                                <p>
                                    Всички продукти в онлайн магазин DS Fashion са оригинални и са внос от Европейския съюз.
                                    Притежават гарантирано качество и произход, отговарящи на марките и цените, които предлагаме.
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
            <Row>
                <Col className="col-8" onClick={() => handleToggle(3)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        До къде доставяте, за колко време се извършва доставката и колко ще струва тя?
                    </h6>
                </Col>

                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 3 && (
                            <div id="secondary-content">
                                <p>
                                    Ние, от DS Fashion, се стремим към <b>бързина и професионализъм</b> при доставката на Вашите поръчки,
                                    затова ползваме услугите на куриерска фирма <b>“Еконт Експрес”.</b>
                                </p>
                                <p>
                                    Доставяме до всяка точка на България в рамките на <b>1-2 работни дни.</b>
                                    Може да получите пратката си до точно посочен от Вас адрес (независимо дали домашен или служебен)
                                    или до офис на "Еконт Експрес" в съответното населено място.
                                    Този срок може да бъде удължен по време на по-натоварени кампанийни периоди,
                                    национални празници или лоши метеорологични условия.
                                </p>
                                <p>
                                    За поръчки над 100 лева доставката е винаги <b>безплатна!</b>
                                </p>
                                <p>
                                    За поръчки под 100 лева доставката е за сметка на клиента.
                                    Цената на доставката до офис на Еконт е около 3-5лв., а до Ваш личен адрес се оскъпява с до 2лв.
                                    Посочените цени са ориентировъчни.
                                </p>
                                <p>
                                    Куриерската услуга за връщането към нас е винаги за <b>наша сметка!</b>
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
            <Row>
                <Col className="col-8" onClick={() => handleToggle(4)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        Всички продукти ли са налични?
                    </h6>
                </Col>

                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 4 && (
                            <div id="secondary-content">
                                <p>
                                    Всички продукти, които са изложени в сайта са в наличност!
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
            <Row>
                <Col className="col-8" onClick={() => handleToggle(5)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        Мога ли да прегледам продукта преди да платя?
                    </h6>
                </Col>

                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 5 && (
                            <div id="secondary-content">
                                <p>
                                    За Ваше <b>удобство</b> и за максимална <b>коректност</b> всяка поръчка пристига с опция <b>“Преглед и тест”</b>,
                                    без значение на каква стойност и от колко артикула се състои тя. 
                                    Това Ви дава възможност да пробвате и добиете по-ясна представа за продукта в момента на получаването му. 
                                    В случай, че не Ви стане или не го харесате, можете да го откажете веднага на куриера.
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
            <Row>
                <Col className="col-8" onClick={() => handleToggle(6)}>

                    <button
                        className="btn btn-link text-dark"
                        aria-controls="secondary-content"
                        aria-expanded={open}
                    >

                        <ArrowDownShort size={25} />
                    </button>

                    <h6 className="d-inline-block" style={{ cursor: 'pointer' }}>
                        Защитени ли са личните ми данни, които предоставям на онлайн магазинът DS Fashion?
                    </h6>
                </Col>

                <Row>
                    <Col className='col-8 ms-5'>
                        {open === 6 && (
                            <div id="secondary-content">
                                <p>
                                    Вашите лични данни ще бъдат използвани от наша страна, само и единствено с цел извършване на комуникация с 
                                    Вас и доставка на поръчката Ви. Ние сме регистрирани в комисията за защита на личните данни с удостоверение номер 383781.
                                </p>
                            </div>
                        )}

                    </Col>
                </Row>
            </Row>
            <hr className='col-8' />
        </Container>
    );
}