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
                                <li>
                                    <Link
                                        className="text-white text-decoration-none"
                                        to={"/page/zamyana-ili-vrushtane"}
                                        onClick={handleClick}
                                    >
                                        ЗАМЯНА ИЛИ ВРЪЩАНЕ
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
        </footer>
    );
}

export default Footer;