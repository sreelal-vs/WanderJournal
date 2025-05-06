import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleLogin } from '../Redux/authSlice';

function Login() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {

      event.stopPropagation();
    }
    else {
      
      const loginData = {
        password: password,
        email: email,
      }
      const user = users.find((user) => user.email === loginData.email );
      if(!user)
      {
       return toast.error("User Not Found")
      }

      if(user.password !== loginData.password)
      {
        return toast.error("Password is wrong")
      }
      dispatch(handleLogin(user));
      navigate("/");
      return toast.success("Login successfull");
    }

    
    
    setValidated(true);
  };

  return (
    <div className='connect login'>
      <Container className='connect-wrap'>
        <Row className='justify-content-center'>
          <Col md={5} className='login-form p-5 rounded-4 shadow'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >

              <Row className="mb-3 ">
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(event) => setEmail(event.target.value)}

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group controlId="validationCustom02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}

                  />
                  <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                </Form.Group>

              </Row>


              <Button type="submit" className="w-100 my-4 orange spacemono text-white border-0">Login</Button>

              <Row>
                <Col className='gray'>
                  if you don't have account,<Link to={"/register"} className='text-dark'>Register now</Link>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>


      </Container>
    </div>


  );
}

export default Login;