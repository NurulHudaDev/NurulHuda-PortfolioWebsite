import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'

const Skills = () => {
    const Progress = ({done}) => {
        const [style, setStyle] = React.useState({});
        
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }
            
            setStyle(newStyle);
        }, 200);
        
        return (
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        )
    }
    
    const App = () => (
        <>
            
        </>
    );
        
    ReactDOM.render(<App />, document.getElementById('app'));
    return (
        <div>
            <Container className='sikills'>
                <h2 className='text-center mb-5 sikill'>SKILLS</h2>
                <Row>
               <Col lg={3} md={6} sm={12}>
               <h3><FontAwesomeIcon className='font-awesome' icon={faSquareFull} /> Frontend Developer</h3>
                <div>
                    <h4>HTML</h4>
                    <Progress done="70"/>
                    <h4>css</h4>
                    <Progress done="80"/>
                    <h4>Bootstrap</h4>
                    <Progress done="60"/>
                    <h4>Tailwind</h4>
                    <Progress done="60"/>
                    <h4>JavaScript</h4>
                    <Progress done="60"/>
                    <h4>React</h4>
                    <Progress done="80"/>
                </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
               <h3><FontAwesomeIcon className='font-awesome' icon={faSquareFull} /> Backend Developer</h3>
                <div>
                    <h4>Node Js</h4>
                    <Progress done="60"/>
                </div>
                <div>
                    <h4>Firebase</h4>
                    <Progress done="80"/>
                </div>
                <div>
                <h4>Mongodb</h4>
                    <Progress done="60"/>
                </div>
                <div>
                <h4>Stripe</h4>
                    <Progress done="50"/>
                </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
               <h3><FontAwesomeIcon className='font-awesome' icon={faSquareFull} /> Graphic Design</h3>
                <div>
                    <h4>Logo Design</h4>
                    <Progress done="90"/>
                </div>
                <div>
                    <h4>Website Ui Design</h4>
                    <Progress done="60"/>
                </div>
                <div>
                    <h4>Business Card Design</h4>
                    <Progress done="70"/>
                </div>
                <div>
                    <h4>Poster Design</h4>
                    <Progress done="60"/>
                </div>
                <div>
                    <h4>Banner Design</h4>
                    <Progress done="60"/>
                </div>
                <div>
                    <h4>Flyer Design</h4>
                    <Progress done="80"/>
                </div>
                <div>
                    <h4>Pade Design</h4>
                    <Progress done="90"/>
                </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
               <h3><FontAwesomeIcon className='font-awesome' icon={faSquareFull} /> Photo Editing</h3>
                <div>
                    <h4>Background Remover</h4>
                    <Progress done="80"/>
                </div>
                <div>
                    <h4>Photo Retouch</h4>
                    <Progress done="80"/>
                </div>
                <div>
                    <h4>Photo Color Correction</h4>
                    <Progress done="70"/>
                </div>
               </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;