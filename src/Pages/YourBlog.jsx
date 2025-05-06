import { Card, Col, Container, Row } from "react-bootstrap"
import "./destination.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const YourBlog = () => {


    const { blog } = useSelector(state => state.blog);
    const { user } = useSelector(state => state.auth);
    const userBlogs = blog.filter((blog) => blog.bloggerName === user?.fullname);
    console.log(userBlogs);

    return (
        <div className="connect">
            <Container className="minheight">
                <Row className="justify-content-center">
                    {userBlogs.length > 0 ? userBlogs.map((blog) => (

                        <Col key={blog.id} xs={12} md={8} className="mb-5">

                            <Card className="border-0 shadow">
                                <Row xs={1} md={2}>
                                    <Col className="p-0">
                                        <Link to={`/blog/${blog.id}`} >
                                            <Card.Img className="rounded-3 h-100 object-fit-cover" variant="top" src={blog.image} />
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Card.Body className="rounded-3 border-2">
                                                <Card.Title className="playfair mb-5">
                                                    {blog.title}
                                                </Card.Title>
                                                <Card.Text className="spacemono">
                                                    {blog.description}

                                                </Card.Text>

                                            </Card.Body>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                               <Link to={`/editblog/${blog.id}`} className="border-0 rounded-0 px-2 orange text-white w-100 d-block text-center text-decoration-none mb-3" >Edit</Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                            </Card>
                        </Col>



                    )) :
                        (<h3 className="text-center gray playfair">YOU DID NOT UPLOADED ANY BLOG</h3>)}
                </Row>
            </Container>
        </div>

    )
}

export default YourBlog;