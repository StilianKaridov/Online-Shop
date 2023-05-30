import React from 'react';
import Modal from '../UI/Modal';

const Checkout = (props) => {

    return (
        <Modal>
            <div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Плащане</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Име</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Емейл</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Адрес</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-4 mb-4">
                                <label htmlFor="city">Град</label>
                                <input type="text" className="form-control" id="city" placeholder="" required />
                                <div className="invalid-feedback">
                                    City is required.
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <label htmlFor="zip">Пощенски код</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Име на карта</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Номер на карта</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Валидност</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block">Плащане</button>

                        <button type="button" onClick={props.onCancel} className="btn btn-dark m-2 btn-lg btn-block">Затваряне</button>
                    </form>
                </div>
            </div>
        </Modal >
    );
};

export default Checkout;