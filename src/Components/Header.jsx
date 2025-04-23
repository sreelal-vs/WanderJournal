import { Container, Image, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import { FaSuitcaseRolling } from "react-icons/fa";

const Header = () => {
    return (
        <Navbar expand="lg" className="position-sticky">
            <Container>
                <Navbar.Brand href="#home">
                    <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        <FaSuitcaseRolling style={{ marginRight: '8px', color: '#ff5722' }} />
                        <span>Wander<span style={{ color: '#ff5722' }}>Journal</span></span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Destinations</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;