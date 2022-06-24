import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import './Footer.css'

const Footer = () => {

    return (
        <div className='footer'>
            <Container>
                <Row className='footer-content mx-auto'>
                    <Col lg={3} md={6} sm={12}>
                        <a className='d-flex align-items-center' href='https://www.facebook.com/profile.php?id=100007906369367' alt=''><FaFacebookSquare /> Facebook</a>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <a className='d-flex align-items-center' href='https://www.linkedin.com/in/nurulhuda-dev/' alt=''><FaLinkedin /> Linkedin</a>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <a className='d-flex align-items-center' href='https://twitter.com/NurulHu92416641' alt=''><FaTwitterSquare /> Twitter</a>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <a className='d-flex align-items-center' href='https://github.com/NurulHudaDev' alt=''><FaGithubSquare /> Github</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;