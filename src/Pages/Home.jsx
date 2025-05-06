import { Card, Col, Container, Row } from "react-bootstrap"
import "../Pages/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Container fluid className="p-0 Home">
                <div className=" indro-back">
                    <div className=" w-100  indro-desc d-flex flex-column justify-content-between align-items-center">
                        <p className="text-center w-100">Explore the World <br className="d-sm-block d-none" /> with Our Travel <br className="d-sm-block d-none" /> Blog</p>
                        <span className="text-center">Discover the most captivating <br className="d-md-block d-none" /> destinations</span>
                        <Link to="/destinations" className="btn px-3 py-2">Start Exploring</Link>
                    </div>
                </div>

            </Container>
            <Container fluid className="About-site py-5">
                <Row className="text-center About-site-head">

                    <h5 className="spacemono gray">About Our Travel Blog</h5>
                    <h1 className="playfair ">Discover New Destinations</h1>
                    <p className="m-0 spacemono gray fs-5">From stunning natural landscapes to vibrant urban centers</p>
                </Row>
                <Row className="justify-content-center mt-5 mx-md-5 mx-3" xs={1} md={2}>
                    <Col className="mb-3">
                        <Card className="p-4 rounded-4 border-0">
                            <Card.Img variant="top" className="rounded-4" width="100%" alt="Cozy Mountain " src="https://cdn-imgs.dora.run/design/Jou2Pe06FeyFrdp1MsTCQG.webp/w/4096/h/4096/format/webp?" />
                            <Card.Body>
                                <Card.Title  className="playfair fs-1">
                                    Cozy Mountain
                                </Card.Title>
                                <Card.Text className="spacemono gray">
                                Nestled in the heart of the mountains, this charming wooden cabin offers a peaceful escape from the hustle and
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-4 rounded-4 border-0">
                            <Card.Img variant="top" className="rounded-4" width="100%" alt="Coastal Trail " src="https://cdn-imgs.dora.run/design/KKTXa9eE8PpK8eI1ePdtTW.webp/w/4096/h/4096/format/webp?" />
                            <Card.Body>
                                <Card.Title className="playfair fs-1">
                                    Coastal Trail
                                </Card.Title>
                                <Card.Text className="spacemono gray">
                                Lace up your hiking boots and embark on a journey through the stunning coastal landscapes. Witness the crashing waves
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Home;