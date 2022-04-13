import {Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"
import {isAuthenticated, logOut} from "../services/authService";
import cartImage from "../views/assets/icons8-buying-30.png";

const NavBar = () => {
    const user = isAuthenticated();
    console.log("HERE",user.role === 'ADMIN');

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
                            <Nav.Link href="#deleteItem">Delete</Nav.Link>
                        )}
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                { user.role === 'USER' && (
                                    <Nav.Link href="/cart" className="mx-2">
                                        <img style={{width: "1.4rem", height: "1.4rem"}} src={cartImage} alt="Cart Image"/>
                                    </Nav.Link>
                                )}
                                <Button onClick={logOut} className="btn btn-outline-secondary w-auto h-auto">Log Out</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/register">
                                    Register
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