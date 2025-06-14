import { Card, Col, Container, Row } from "react-bootstrap"
import "./destination.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const Destinations = () => {


    const { blog } = useSelector(state => state.blog);
    
    return (
        <div className="connect">
            <Container className="minheight">
            <Row className="justify-content-center">
                {blog.map((blog) => (

                    <Col key={blog.id} xs={12} md={8} className="mb-5">

                        <Card className="border-0 shadow">
                            <Row xs={1} md={2}>
                                <Col>
                                    <Link to={`/blog/${blog.id}`} >
                                        <Card.Img className="rounded-3 h-100 object-fit-cover" variant="top" src={blog.image} />
                                    </Link>
                                </Col>
                                <Col>
                                
                                    <Card.Body className="rounded-3 border-2">
                                        <Card.Title className="playfair mb-5">
                                            {blog.title}
                                        </Card.Title>
                                        <Card.Text className="spacemono">
                                            {blog.description}

                                        </Card.Text>

                                    </Card.Body>
                                </Col>
                            </Row>



                        </Card>
                    </Col>



                ))}
            </Row>
        </Container>
        </div>
        
    )
}

export default Destinations;