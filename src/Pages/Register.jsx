import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userRegister } from '../Redux/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Register() {
  const { Formik } = formik;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    fullname: yup.string().required("Full name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.string().required("Phone number is required").matches(/^[0-9]{10}$/, "Invalid phone Number"),
    password: yup.string().required("Password is required"),
    role: yup.string().required("Role is required")

  });
  const handleRegister = (value) => {

    dispatch(userRegister(value));
    toast.success("Register successfull");
    navigate("/login");
  }
  return (
    <div className='connect'>
      <Container className='connect-wrap'>
        <Formik
          validationSchema={schema}
          onSubmit={handleRegister}
          initialValues={{
            fullname: '',
            email: '',
            phone: '',
            password: '',
            role: '',
            userPic:"",

          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Row className='justify-content-center spacemono '>
              <Col md={5} className='p-5 rounded-4 shadow'>
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group

                      controlId="validationFormik101"
                      className="position-relative"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                        isValid={touched.fullname && !errors.fullname}
                        isInvalid={!!errors.fullname}
                      />
                      <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid ' className='text-danger '>{errors.fullname}</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group

                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={!!errors.email}
                      />

                      <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type='invalid ' className='text-danger '>{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="validationFormikphone">
                      <Form.Label>Phone</Form.Label>


                      <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isValid={touched.phone && !errors.phone}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid" className='text-danger' >
                        {errors.phone}
                      </Form.Control.Feedback>

                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group

                      controlId="validationFormik103"
                      className="position-relative"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                      />

                      <Form.Control.Feedback type="invalid" className='text-danger '>
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>


                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="validationFormikRole">
                      <Form.Label>Role</Form.Label>
                      <Form.Select
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        isValid={touched.role && !errors.role}
                        isInvalid={!!errors.role}
                      >
                        <option value="">Select your role</option> {/* empty default */}
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="blogger">Blogger</option>
                      </Form.Select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid" className="text-danger">
                        {errors.role}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>


                  <Button type="submit" className='my-4 w-100 orange spacemono text-white border-0'>Register</Button>
                </Form>
              </Col>
            </Row>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default Register;