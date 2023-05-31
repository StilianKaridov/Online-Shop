import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (

        <footer className='mt-auto'>
            <div className="d-flex justify-content-between ps-5" style={{ backgroundColor: 'rgb(37, 35,	36)'}}>

                <div className="mt-5 mb-5 row w-50">

                    <div className="col-md-6">
                        <h5 className="text-white">Категории</h5>
                        <div>
                            <ul className='p-0'>
                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/products/muje"}
                                        onClick={handleClick}
                                    >
                                        Мъжки
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/products/jeni"}
                                        onClick={handleClick}
                                    >
                                        Дамски
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/products/deca"}
                                        onClick={handleClick}
                                    >
                                        Детски
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <h5 className="text-white">Клиентски услуги</h5>
                        <div>
                            <ul className='p-0'>
                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/page/chesto-zadavani-vuprosi"}
                                        onClick={handleClick}
                                    >
                                        Често задавани въпроси
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/page/za-nas"}
                                        onClick={handleClick}
                                    >
                                        За нас
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/contacts"}
                                        onClick={handleClick}
                                    >
                                        Контакти
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/page/dostavka-i-plashtane"}
                                        onClick={handleClick}
                                    >
                                        Доставка и плащане
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <div className='bg-gradient-dark text-center text-white p-3' style={{ backgroundColor: 'rgba(52,51,51,255)'}}>
                    © 2023 Copyright: DS Fashion
            </div>
        </footer>
    );
}

export default Footer;