import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (

        <footer>
            <div className="bg-dark d-flex justify-content-between">

                <div className="mt-5 mb-5 row w-50">

                    <div className="col-md-6">
                        <h5 className="text-white">Категории</h5>
                        <div>
                            <ul>
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
                            <ul>
                                <li><a className="text-white text-decoration-none" href="/page/zamyana-ili-vrushtane">ЗАМЯНА ИЛИ ВРЪЩАНЕ</a></li>
                                <li><a className="text-white text-decoration-none" href="/page/za-nas">За нас</a></li>
                                <li><a className="text-white text-decoration-none" href="/contacts">Контакти</a></li>
                                <li><a className="text-white text-decoration-none" href="/page/dostavka-i-plashtane">Доставка и плащане</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;