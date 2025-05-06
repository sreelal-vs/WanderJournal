import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../Redux/addBlogSlice";


function AddBlog() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const dispatch = useDispatch()
    const {user} = useSelector(state=>state.auth);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const addedBlogDetails = {
        title,
        description,
        image,
        bloggerName:user.fullname
        
      };
      dispatch(addBlog({...addedBlogDetails,id:Date.now()}))
    //   event.target.reset()
        window.location.reload();

    }

    setValidated(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center connect"
      
    >
      <Container>
        <Row className="justify-content-center ">
          <Col md={6} lg={5}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="p-4 border rounded shadow bg-white spacemono"
            >
              <h2 className="text-center playfair">Add Blog</h2>

              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control required type="text" placeholder="Blog Title" onChange={(event)=>setTitle(event.target.value)}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" placeholder="Description" onChange={(event)=>setDescription(event.target.value)} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="validationCustomUsername1"
              >
                <Form.Label>Image URL</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text> 🧷</InputGroup.Text>
                  <Form.Control type="text" placeholder="Image URL" required onChange={(event)=>setImage(event.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid image URL.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              

              <Button type="submit" className="orange spacemono text-white border-0 ">Add Blog</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddBlog;