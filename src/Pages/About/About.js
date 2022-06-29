import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from '../../images/01.png'
import './About.css'

const About = () => {

    return (
        <div className='about'>
            <h2 className='text-center mb-5'>ABOUT ME</h2>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col className='about-image' md={6} sm={12}>
                        <img src={Image} alt='' />
                    </Col>
                    <Col className='about-content'>
                        <p>Hello, My name is Nurul Huda. I am a front end developer and graphics designer. My goal is to be a programmer. I have come a long way in that goal.
                            I know how important user interface design is for website development. So I have acquired graphic design skills for 2 years.
                            My another goal is to satisfy my client through my work</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;