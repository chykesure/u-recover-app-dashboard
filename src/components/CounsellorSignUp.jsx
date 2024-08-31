import React from 'react';
import { Container, Row, Col, Image, Form, Button, ListGroup } from 'react-bootstrap';
import './counsellorsignup.css';
import logo from '../images/ucover.png'; // Replace with your logo path

function CounsellorSignUp() {
    return (
        <Container fluid className="counsellor-signup-container d-flex justify-content-center align-items-center min-vh-100">
            <Row className="justify-content-center align-items-center w-100">
                <Col md={4} lg={2} className="bg-white p-4 rounded shadow mb-4 mb-lg-0 mx-md-3">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <Image src={logo} alt="U-Recover" className="logo me-3" style={{ width: "10%", borderRadius: "55%" }} />
                        <h4 className="mb-0">U-Recover</h4>
                    </div>
                    <ListGroup variant="flush" className="mb-4">
                        <ListGroup.Item
                            className="d-flex align-items-center py-3 border-0 active-item"
                            tabIndex="0"
                            autoFocus>
                            <i className="bi bi-person fs-4 me-3"></i>
                            <div>
                                <strong>Login Details</strong>
                                <p className="mb-0 text-muted">Provide an email and a password</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center py-3 border-0">
                            <i className="bi bi-envelope fs-4 me-3"></i>
                            <div>
                                <strong>Verify Email</strong>
                                <p className="mb-0 text-muted">Enter your verification code</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center py-3 border-0">
                            <i className="bi bi-pencil fs-4 me-3"></i>
                            <div>
                                <strong>Edit Profile</strong>
                                <p className="mb-0 text-muted">Update your profile details</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex align-items-center py-3 border-0">
                            <i className="bi bi-arrow-right fs-4 me-3"></i>
                            <div>
                                <strong>Welcome to U-Recover</strong>
                                <p className="mb-0 text-muted">You will be redirected to your page</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={6} lg={4} className="login-form-container bg-white p-4 rounded shadow mx-md-3">
                    <div className="text-center mb-4">
                        <Image src={logo} alt="U-Recover" className="main-logo mb-4" style={{ width: "25%", borderRadius: "55%" }} />
                        <h3 className="mb-3">Login to your account</h3>
                        <p>Welcome back counsellor! Provide your email and password</p>
                    </div>
                    <Form>
                        <Form.Group controlId="formEmail" className="mb-4">
                            <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" className="form-input" />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mb-4">
                            <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" className="form-input" />
                        </Form.Group>
                        <div className="divider my-4">
                            <span>OR</span>
                        </div>
                        <Button variant="outline-secondary" className="w-100 mb-4 google-btn">
                            <i className="bi bi-google me-2"></i> Continue with Google
                        </Button>
                        <Button variant="success" className="w-100 continue-btn">Continue</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default CounsellorSignUp;
