import { Accordion, Col, Container, Row } from "react-bootstrap"
import './Footer.css';
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdLocalLibrary } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <Container fluid className="footer py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Row className="d-none d-lg-flex">
                        <Col className="align-content-center pe-5">

                            <ul className="list-unstyled orange-gray spacemono">
                                <h3 className="playfair  text-black-50">Contact Us</h3>
                                <li><FaHome className="mb-1 me-1" />NewYork,NY 10071,US</li>
                                <li><CiMail  className="mb-1 me-1" />info@example.com
                                </li>
                                <li><IoMdCall className="mb-1 me-1" />+01 234 56788</li>
                                <li><MdLocalLibrary className="mb-1 me-1" />+01 555 56788</li>
                            </ul>

                        </Col>
                        <Col>
                            <ul className="list-unstyled orange-gray spacemono">
                                <h3 className="playfair  text-black-50">Explore</h3>
                                <li>Home</li>
                                <li>Blog
                                </li>
                                <li>Destinations</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="list-unstyled orange-gray spacemono">
                                <h3 className="playfair  text-black-50">Connect</h3>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className="list-unstyled orange-gray spacemono">
                                <h3 className="playfair text-black-50">Company</h3>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Partners</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="d-flex d-lg-none">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h3 className="playfair  text-black-50 fs-4">Contact Us</h3>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled text-black spacemono">
                                        <li><FaHome className="mb-1 me-1" />NewYork,NY 10071,US</li>
                                        <li><CiMail  className="mb-1 me-1" />info@example.com
                                        </li>
                                        <li><IoMdCall className="mb-1 me-1" />+01 234 56788</li>
                                        <li><MdLocalLibrary className="mb-1 me-1" />+01 555 56788</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h3 className="playfair  text-black-50 fs-4">Explore</h3>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled text-black spacemono">
                                        <li>Home</li>
                                        <li>Blog
                                        </li>
                                        <li>Destinations</li>
                                        <li>Contact</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h3 className="playfair   text-black-50 fs-4">Connect</h3>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled text-black spacemono">
                                        <li>Facebook</li>
                                        <li>Instagram</li>
                                        <li>Twitter</li>
                                        <li>Youtube</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <h3 className="playfair  text-black-50 fs-4">Company</h3>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled text-black spacemono">
                                        <li>About Us</li>
                                        <li>Careers</li>
                                        <li>Partners</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </Col>

            </Row>

        </Container>
    )
}


export default Footer;