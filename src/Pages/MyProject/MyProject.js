import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import webSiteImage1 from '../../images/web-site-image1.png'
import webSiteImage2 from '../../images/web-site-image2.png'
import webSiteImage3 from '../../images/web-site-image3.png'
import './MyProject.css'

const MyProject = () => {
    return (
        <div>
            <Container>
                <h2 className='text-center projeact-titel'>MY PROJEACT</h2>
                <CardGroup className='projeact-cards'>
                    <Card className='projeact-card text-center'>
                        <Card.Body>
                            <img className='projeact-image' src={webSiteImage1} alt='' />
                            <h2>Projeact:</h2><h4>laptop parts</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
                        </Card.Body>
                    </Card>
                    <Card className='projeact-card text-center'>
                        <Card.Body>
                            <img className='projeact-image' src={webSiteImage2} alt='' />
                            <h2>Projeact:</h2><h4>Car Warehouse</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className='projeact-button' href='https://warehouse-website-9eef9.web.app/' alt=''>Live Demo</a>
                        </Card.Body>
                    </Card>
                    <Card className='projeact-card text-center'>
                        <Card.Body>
                        <img className='projeact-image' src={webSiteImage3} alt='' />
                            <h2>Projeact:</h2><h4>Oshine</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a className='projeact-button' href='https://celadon-paprenjak-84979b.netlify.app' alt=''>Live Demo</a>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default MyProject;