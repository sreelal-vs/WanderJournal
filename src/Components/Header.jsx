import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import { FaSuitcaseRolling, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../Redux/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Header = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(state => state.auth);


    const HandleLogout = () => {
        dispatch(handleLogout());
        toast.success("Logout Successfully")
    }
    return (
        <Navbar expand="lg" className="position-sticky ">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <div style={{ display: 'flex', alignItems: 'center', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1.5rem' }}>
                        <FaSuitcaseRolling style={{ marginRight: '8px', color: '#ff5722' }} />
                        <span>Wander<span style={{ color: '#ff5722' }}>Journal</span></span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto  ">
                        <Nav.Link  as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
                        {user?.role === "blogger" && <Nav.Link as={Link} to="/addblog">Add Blog</Nav.Link>}
                        {user?.role === "blogger" && <Nav.Link as={Link} to="/yourblog">Your Blog</Nav.Link>}

                    </Nav>
                    <Nav className="ms-auto authentification">

                        {isAuthenticated
                            ? <><Nav.Link >
                                <button className="border-0 rounded-1 px-2 orange text-white" onClick={HandleLogout}>Logout</button>
                            </Nav.Link>
                                <Nav.Link as={Link} to="/profile">
                                    <FaUserCircle size={28} />
                                </Nav.Link></>
                            : <Nav.Link as={Link} to="/login">
                                <button className="border-0 rounded-1 px-2 orange text-white" >Login</button>
                            </Nav.Link>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;