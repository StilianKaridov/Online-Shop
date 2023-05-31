import React, { useState } from 'react';
import Modal from '../UI/Modal';

const Checkout = (props) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [post, setPost] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [CCV, setCCV] = useState('');
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === ''
            || lastName === ''
            || email === ''
            || post === ''
            || city === ''
            || address === ''
            || cardName === ''
            || cardNumber === ''
            || expiration === ''
            || CCV === ''
        ) {
            setErrors("Попълни всички полета");
            return;
        }

    };
    return (
        <Modal>
            <div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Плащане</h4>
                    <form onSubmit={handleSubmit} className="needs-validation">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Име</label>
                                <input type="text" className="form-control" id="firstName" placeholder=""
                                    value={name} onChange={(e) => setName(e.target.value)} required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" className="form-control" id="lastName" placeholder=""
                                    value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Емейл</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"
                             value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Адрес</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                             value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>

                        <div className="row">

                            <div className="col-md-4 mb-4">
                                <label htmlFor="city">Град</label>
                                <input type="text" className="form-control" id="city" placeholder=""
                                 value={city} onChange={(e) => setCity(e.target.value)} required />
                            </div>

                            <div className="col-md-4 mb-4">
                                <label htmlFor="zip">Пощенски код</label>
                                <input type="text" className="form-control" id="zip" placeholder=""
                                value={post} onChange={(e) => setPost(e.target.value)} required />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Име на карта</label>
                                <input type="text" className="form-control" id="cc-name" placeholder=""
                                value={cardName} onChange={(e) => setCardName(e.target.value)} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Номер на карта</label>
                                <input type="text" className="form-control" id="cc-number" placeholder=""
                                value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Валидност</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                value={expiration} onChange={(e) => setExpiration(e.target.value)} required />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder=""
                                value={CCV} onChange={(e) => setCCV(e.target.value)} required />
                            </div>
                        </div>
                        {errors &&
                            <div className="invalid-feedback">
                                {errors}
                            </div>
                        }
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type='submit'>Плащане</button>

                        <button onClick={props.onCancel} className="btn btn-dark m-2 btn-lg btn-block">Затваряне</button>
                    </form>
                </div>
            </div>
        </Modal >
    );
};

export default Checkout;