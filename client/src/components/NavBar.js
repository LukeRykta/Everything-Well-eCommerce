import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none', color: "white", margin: 0}}>
                        Everything Well
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/addItem">Create</Nav.Link>
                        <Nav.Link href="#deleteItem">Destroy</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;