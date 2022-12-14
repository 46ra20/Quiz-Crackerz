import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        <Navbar bg="primary" variant="dark" className='shadow' fixed="top" expand="lg">
            <Container>
                <Navbar.Brand>JSRN e-learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {/* <NavLink to={'/'} className="nav-link">Home</NavLink> */}
                    <NavLink to={'/home'} className="nav-link">Home</NavLink>
                    <NavLink to={'/topic'} className="nav-link">Topic</NavLink>
                    <NavLink to={'/statistics'} className="nav-link">Statistics</NavLink>
                    <NavLink to={'/blog'} className="nav-link">Blog</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;