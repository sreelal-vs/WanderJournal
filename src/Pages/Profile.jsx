import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {  useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "./Profile.css"
const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    
    

    
    if (!user) {
        return <Navigate to="/login" />;
    }

    
    return (
        <div className="minheight connect">
            <Container>
                <Row>
                    <Card className="p-0 shadow">
                        <Card.Img
                            height={250}
                            className="w-100 object-fit-cover"
                            variant="top"
                            src="https://www.shutterstock.com/shutterstock/photos/643181470/display_1500/stock-photo-blur-pastel-color-sweet-dreamy-clouds-background-643181470.jpg"
                        />
                        <Card.Body >
                            <Row>
                                <Col xl={2}>
                                    <Image
                                        roundedCircle
                                        className="user_profile_pic border border-4 border-light shadow"
                                        height={170}
                                        src={user.userPic|| "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"}
                                        alt="Profile Photo"
                                    />
                                </Col>
                                <Col xl={10} className="d-flex align-items-center">
                                    <div>
                                        
                                        <h3 className="text-dark playfair">{user.fullname}</h3>
                                        <h5 className="spacemono">
                                            {user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase()}
                                        </h5>
                                        <p>
                                            <FaPhoneSquareAlt /> {user.phone} | <CgMail /> {user.email}
                                        </p>
                                        {user.role === "admin" && <Link to={"/admin/userlist"} className="text-decoration-none spacemono ">User List</Link>}
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;
