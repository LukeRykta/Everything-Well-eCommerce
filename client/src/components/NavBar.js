import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"
import {isAuthenticated, logOut} from "../services/authService";
import {useSelector} from "react-redux";

const NavBar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    const user = isAuthenticated();

    return (
        <Navbar collapseOnSelect expand="sm"  variant="dark" className="color-nav">
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: 'none', color: "white", margin: 0}}>
                        Everything Well
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        { user.role === 'ADMIN' && (
                            <Nav.Link href="/addItem">Create</Nav.Link>
                        )}
                        { user.role === 'ADMIN' && (
                            <Nav.Link href="/Settings">Settings</Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                { user.role === 'USER' && (
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>{" "+quantity+" "}</span>
                                    </Link>
                                )}
                                <Nav.Link eventKey={2} href="/#Tracks">
                                    Tracks
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/#AboutUs">
                                    About Us
                                </Nav.Link>
                                <Button onClick={logOut} className="btn btn-outline-secondary w-auto h-auto ">
                                    <i className="fas fa-sign-out">Log Out</i>
                                </Button>

                            </>
                        ) : (
                            <>
                                <Nav.Link href="/login">
                                    Login 
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/register">
                                    Register
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/#Tracks">
                                    Tracks
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/#AboutUs">
                                    About Us
                                </Nav.Link>
                            </>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;