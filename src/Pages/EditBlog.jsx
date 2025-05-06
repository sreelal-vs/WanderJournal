import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog } from '../Redux/addBlogSlice';


function EditBlog() {
    const {id} = useParams();
    
    
    const { Formik } = formik;

    const {blog} = useSelector((state) => state.blog);
    const editingBlog = blog.find((blog) => blog.id === Number(id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const schema = yup.object().shape({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        image: yup.string().required("image url number is required"),


    });
    const handleEditBlog = (value) => {
            const updatedBlog = {...editingBlog,...value};
            dispatch(editBlog(updatedBlog));
            toast.success("Blog updated Successfully")
            navigate('/yourblog');

    }
    return (
        <div className='connect'>
            <Container className='connect-wrap'>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleEditBlog}
                    initialValues={{
                        title: editingBlog.title,
                        description: editingBlog.description,
                        image: editingBlog.image,


                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        
                        <Row className='justify-content-center spacemono '>
                            
                            <Col md={5} className='p-5 rounded-4 shadow bg-white'>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className='mb-3'>
                                        <h2 className='playfair text-black'>Update Blog</h2>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group

                                            controlId="validationFormik101"
                                            className="position-relative"
                                        >
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                isValid={touched.title && !errors.title}
                                                isInvalid={!!errors.title}
                                            />
                                            <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type='invalid ' className='text-danger '>{errors.title}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group

                                            controlId="validationFormik102"
                                            className="position-relative"
                                        >
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                isValid={touched.description && !errors.description}
                                                isInvalid={!!errors.description}
                                            />

                                            <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type='invalid ' className='text-danger '>{errors.description}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">

                                        <Form.Group controlId="validationFormikphone">
                                            <Form.Label>Image</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text> 🧷</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    name="image"
                                                    value={values.image}
                                                    onChange={handleChange}
                                                    isValid={touched.image && !errors.image}
                                                    isInvalid={!!errors.image}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid" className='text-danger' >
                                                    {errors.image}
                                                </Form.Control.Feedback>
                                            </InputGroup>



                                        </Form.Group>
                                    </Row>



                                    <Button type="submit" className='my-4 w-100 orange spacemono text-white border-0'>Save Blog</Button>
                                </Form>
                            </Col>
                        </Row>
                    )}
                </Formik>
            </Container>
        </div>
    );
}

export default EditBlog;