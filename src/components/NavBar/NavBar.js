import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo.jpg';

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} alt="Logo" className="d-inline-block align-top" width="50" height="50"/>
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
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
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;