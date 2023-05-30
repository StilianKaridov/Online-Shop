import React from "react";
import { useSelector } from "react-redux";
import classes from './NavBarCartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const NavBarCartButton = (props) => {
    const items = useSelector(state => state.cart.items);

    let itemsInCart = 0;

    items.map(() => (
        itemsInCart++
    ))

    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Количка</span>
            <span className={classes.badge}>{itemsInCart}</span>
        </button>
    );
}

export default NavBarCartButton;