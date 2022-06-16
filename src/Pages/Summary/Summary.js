import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Summary.css'
const Summary = () => {
    return (
        <div className='summary-banner'>
            <div className='summary-banner-overlay'>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                                <h2>100</h2>
                                <h4>Total Projacts</h4>
                                <hr className='bg-white w-30' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                                <h2>100</h2>
                                <h4>Total Projacts</h4>
                                <hr className='bg-white w-30' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                                <h2>100</h2>
                                <h4>Total Projacts</h4>
                                <hr className='bg-white w-30' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Summary;