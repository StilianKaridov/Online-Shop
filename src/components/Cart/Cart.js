import React, {useState} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../reduxStore/cart-slice";
import CartItem from './CartItem';
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const ttlPrice = useSelector(state => state.cart.totalPrice);
  const totalPrice = `${ttlPrice.toFixed(2)} лв.`;

  const handleCart = () => {
    props.onClose()
};

const cartItemRemoveHandler = (id) => {
  dispatch(cartActions.removeItem({id}))
};

const cartItemAddHandler = (item) => {
  dispatch(cartActions.addItem({ ...item, amount: 1 }));
};

const cartItems = items.map((item) => (
  <ul><CartItem id={item.id} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} name={item.name} amount={item.amount} /></ul>
)
);

const activateCheckout = () => {
  setCheckout(true);
};

const cancelHandler = () => {
  setCheckout(false);
}

  return (<Modal onClick={handleCart}>
    <div>
      {cartItems}
      <div onClick={handleCart} className={classes.total}>
        <span>Всичко</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={handleCart} className={classes['button--alt']}>Затвори</button>
        <button className={classes['button--alt']} onClick={activateCheckout}>Поръчай</button>
        {checkout && <Checkout onHandleCheckout={props.onHideCart} onCancel={cancelHandler} />}
      </div>
    </div>
    </Modal>
  );
};

export default Cart;