import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import * as ReactDOM from 'react-dom';
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
            <Container>
                <h2 className='text-center'>SKILLS</h2>
                <Row>
               <Col>
               <h2></h2>
                <div>
                    <Progress done="70"/>
                </div>
               </Col>
               <Col>
                <div>
                    <Progress done="70"/>
                </div>
               </Col>
               <Col>
                <div>
                    <Progress done="70"/>
                </div>
               </Col>
               <Col>
                <div>
                    <Progress done="70"/>
                </div>
               </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;