import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './ContactSection.css'

const ContactSection = () => {
    return (
        <div className='contact-section'>
            <Container className='contact-text'>
                <h1 className='text-center mb-5'>Contact Me</h1>
                <Row className='d-flex align-items-center gy-5'>
                    <Col la={6} md={6} sm={12}>
                        <h2>Discuss Now</h2>
                        <div className='mb-4'>
                        <h4>Email: <span>nurulhuda40nh@gmail.com</span></h4>
                        <h4>Phone: <span>+880 1798792355</span></h4>
                        </div>
                        <a className='fb-massage' href='' alt=''>Massage</a>
                    </Col>
                    <Col la={6} md={6} sm={12}>
                        <h2>Quick Connect</h2>
                        <div>
                            <Form className='form'>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Addess</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea"  rows="3"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactSection;