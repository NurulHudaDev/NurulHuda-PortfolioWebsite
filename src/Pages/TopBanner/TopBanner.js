import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import BannerImage from '../../images/banner_image1.png'
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div className='top-banner-overlay'>
            <Container>
                <Row>
                    <Col className='top-banner-content' md={6} sm={12}>
                        <div>
                            <h1>I am Nurul Huda</h1>
                            <h2>web developer & graphic designer</h2>
                            <div className='mt-4'>
                            <button className='top-banner-button1'>View More Details</button>
                            <button className='top-banner-button2'>Contact Us</button>
                            </div>
                        </div>
                    </Col>
                    <Col className='banner-image d-flex justify-content-center align-items-center py-3' md={6} sm={12}>
                        <img src={BannerImage} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default TopBanner;