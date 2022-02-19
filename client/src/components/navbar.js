import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
    let user;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        {user ? (
                            <>
                                <h4 style={{color: 'white', marginRight: 10}}/>
                                <Button className="btn btn-outline-dark">
                                    Log Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link style={{ marginRight: "10px" }} to="/register">
                                    Sign Up
                                </Link>
                                <Link to="login">Log In</Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;