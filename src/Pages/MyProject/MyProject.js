import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import webSiteImage1 from '../../images/web-site-image1.png'
import webSiteImage2 from '../../images/web-site-image2.png'
import webSiteImage3 from '../../images/web-site-image3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MyProject.css'

const MyProject = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    // <div>
    //     <Container>
    //         <h2 className='text-center projeact-titel'>MY PROJEACT</h2>
    //         <CardGroup className='projeact-cards'>
    //             <Card className='projeact-card text-center'>
    //                 <Card.Body>
    //                     <img className='projeact-image' src={webSiteImage1} alt='' />
    //                     <h2>Projeact:</h2><h4>laptop parts</h4>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                     <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
    //                 </Card.Body>
    //             </Card>
    //             <Card className='projeact-card text-center'>
    //                 <Card.Body>
    //                     <img className='projeact-image' src={webSiteImage2} alt='' />
    //                     <h2>Projeact:</h2><h4>Car Warehouse</h4>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                     <a className='projeact-button' href='https://warehouse-website-9eef9.web.app/' alt=''>Live Demo</a>
    //                 </Card.Body>
    //             </Card>
    //             <Card className='projeact-card text-center'>
    //                 <Card.Body>
    //                 <img className='projeact-image' src={webSiteImage3} alt='' />
    //                     <h2>Projeact:</h2><h4>Oshine</h4>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                     <a className='projeact-button' href='https://celadon-paprenjak-84979b.netlify.app' alt=''>Live Demo</a>
    //                 </Card.Body>
    //             </Card>
    //         </CardGroup>
    //     </Container>
    // </div>


    <div className='Projeacts'>
      <Container>
        <h2 className='text-center mb-5'>MY PROJEACTS</h2>
        <Slider {...settings}>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage1} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                    <h2>Projeact:</h2><h4>laptop parts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage2} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                  <h2>Projeact:</h2><h4>Car Warehouse</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className='projeact-button' href='https://warehouse-website-9eef9.web.app/' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage3} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                  <h2>Projeact:</h2><h4>Oshine</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a className='projeact-button' href='https://celadon-paprenjak-84979b.netlify.app' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage1} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                    <h2>Projeact:</h2><h4>laptop parts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage1} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                    <h2>Projeact:</h2><h4>laptop parts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='salid-contenar'>
            <div className='salid-conten'>
              <div className='card-wrapper'>
                <div className='card'>
                  <div className='image-contend'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img className='card-image' src={webSiteImage1} alt='' />
                    </div>
                  </div>
                  <div className='card-contend'>
                    <h2>Projeact:</h2><h4>laptop parts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a className='projeact-button' href='https://assurement-12.web.app' alt=''>Live Demo</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default MyProject;