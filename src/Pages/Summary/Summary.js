import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Summary.css'
const Summary = () => {
    return (
        <div className='summary-banner'>
            <div className='summary-banner-overlay'>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                            <h2>
                                    <CountUp start={0} end={28}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <h4>Web Development Projacts</h4>
                                <hr className='bg-white w-30' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                            <h2>
                                    <CountUp start={0} end={130}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <h4>Graphic Design Projacts</h4>
                                <hr className='bg-white w-30' />
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='d-flex justify-content-center text-center summary-conten'>
                            <div>
                            <h2>
                                    <CountUp start={0} end={20}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h2>
                                <h4>Photo Editing Projacts</h4>
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