import { Card, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

const FullBlog = () =>
{
    const {blog} = useSelector(state => state.blog);
    const {id} = useParams();
    
    const FullBlog = blog.find(blog => blog.id === Number(id));
    console.log(FullBlog);
    
    return(
        <div className="connect minheight">
            <Container>
            <Row className="justify-content-center">
                

                    <Col key={FullBlog.id}  className="mb-5">

                        <Card className="border-0 shadow">
                            <Row xs={1} md={2}>
                                <Col>
                                    
                                        <Card.Img className="rounded-3 h-100 object-fit-cover" variant="top" src={FullBlog.image} />
                                    
                                </Col>
                                <Col>
                                    <Card.Body className="rounded-3 border-2">
                                        <Card.Title className="playfair mb-5">
                                            {FullBlog.title}
                                        </Card.Title>
                                        <Card.Text className="spacemono">
                                            {FullBlog.description}

                                        </Card.Text>

                                    </Card.Body>
                                </Col>
                            </Row>



                        </Card>
                    </Col>



               
            </Row>
            </Container>
        </div>
    )
}
export default FullBlog;