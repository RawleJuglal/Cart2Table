import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Google, Twitter, Github, Facebook } from 'react-bootstrap-icons';
import './C2TNavbar.css'

const C2TNavbar = ()=>{
    return(
        <>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Sign In" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <Google /> Google
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">
                                    <Facebook /> Facebook
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">
                                    <Twitter /> Twitter
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Github /> Github
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}


export { C2TNavbar }