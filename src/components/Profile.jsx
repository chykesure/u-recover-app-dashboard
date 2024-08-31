import React from 'react';
import './profile.css';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import userProfile from '../images/user.jpg'; // Example user profile image

function Profile({ page = "Profile" }) {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>{page}</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="bi bi-person active">{page}</li>
                    </ol>
                </nav>
            </div>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <Card className="p-4 shadow-sm">
                            <Row className="align-items-center">
                                <Col md={2} className="text-center">
                                    <img
                                        src={userProfile}
                                        alt="Profile"
                                        className="rounded-circle img-fluid mb-2"
                                    />
                                    <Button variant="outline-success" className="mt-2" style={{ width: '150%' }}>
                                        Edit profile
                                    </Button>

                                </Col>
                                <Col>
                                    <h4>Jenny Wilson</h4>
                                    <p className="text-muted">Kuje, Abuja, Nigeria</p>
                                </Col>
                            </Row>
                            <hr />
                            <h5>Personal Information</h5>
                            <Row>
                                <Col md={6}>
                                    <p><strong>First Name:</strong> Polycarp</p>
                                    <p><strong>Email Address:</strong> Polycarpchike@gmail.com</p>
                                    <p><strong>Bio:</strong> App Developer</p>
                                </Col>
                                <Col md={6}>
                                    <p><strong>Other Names:</strong> Chike Pascal</p>
                                    <p><strong>Phone Number:</strong> +234 810 000 000</p>
                                </Col>
                            </Row>
                            <hr />
                            <h5>Contact Address</h5>
                            <Row>
                                <Col md={4}>
                                    <p><strong>Country:</strong> Nigeria</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>State:</strong> Osun</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Region/LGA:</strong> Ilesha</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="p-4 shadow-sm">
                            <h5>Today's Schedule</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6>Scheduled call with counsellor</h6>
                                        <p className="mb-1"><i className="bi bi-calendar-event"></i> 20th June, 2024</p>
                                        <p className="text-muted"><i className="bi bi-clock"></i> 08:30pm - 10:00pm</p>
                                    </div>
                                    <i className="bi bi-bell"></i>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6>Thursday Revival Hour</h6>
                                        <p className="mb-1"><i className="bi bi-calendar-event"></i> 20th June, 2024</p>
                                        <p className="text-muted"><i className="bi bi-clock"></i> 05:50pm - 08:00pm</p>
                                    </div>
                                    <i className="bi bi-bell"></i>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6>Peculiar Jewels webinar</h6>
                                        <p className="mb-1"><i className="bi bi-calendar-event"></i> 20th June, 2024</p>
                                        <p className="text-muted"><i className="bi bi-clock"></i> 12:00am - 01:00pm</p>
                                    </div>
                                    <i className="bi bi-bell"></i>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Profile;
