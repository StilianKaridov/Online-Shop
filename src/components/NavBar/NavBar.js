import React, { useState, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo.jpg';
import NavBarCartButton from './NavBarCartButton';

function NavBar(props) {
    const handelCart = () => {
        props.onShowCart();
    }
    return (
        <Fragment>
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Logo" className="d-inline-block align-top" width="50" height="50" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='text-center' id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to="/products/muje">
                            <Nav.Link>Мъжки</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products/jeni">
                            <Nav.Link>Дамски</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products/deca">
                            <Nav.Link>Детски</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <div className='ms-auto'>
                        <NavBarCartButton onClick={handelCart}></NavBarCartButton>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default NavBar;