import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="">JobPortal</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Companies</Nav.Link>
                <Nav.Link href="/job">Jobs</Nav.Link>
            </Nav>
        </Navbar>
    );
}