import React from "react"
import { Navbar, Container } from "react-bootstrap"

export default function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Institution name</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Students manager
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}