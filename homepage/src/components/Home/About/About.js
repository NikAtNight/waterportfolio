import React, {Component} from 'react'
import './About.css'
import {Card, Col, Row} from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';

class About extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }


    render() {
        return (
            <section id="about" className="home-section">
                <div className="a-content">
                    <div className="about-content">
                        <br/>
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                            <Card className="card-sizing-front">
                                <Row className="flex">
                                    <Col><h2 className="font-style-title"> About Me </h2></Col>
                                    <Col style={{margin: "auto",}}>
                                        <div className="d-flex flex-row-reverse mr-5">
                                            <a href="https://twitter.com/NikhilKapadia_" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left" alt="twitter" width="30px"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/twitter.svg"/>
                                            </a>
                                            <a href="https://github.com/AstroNik" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left" style={{marginRight: "35px"}} alt="github"
                                                     width="30px"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/github.svg"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/nikhilkapadia01/" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left" style={{marginRight: "35px"}} alt="linkedin"
                                                     width="30px"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/linkedin.svg"/>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>

                                <Row style={{marginTop: "50px"}}>
                                    <Col>
                                        <div className="about-img">
                                            <img className="img-fix" src="img/octopus.jpg" alt="octopus"/>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="about-me">
                                            <h4 className="font-style"> Nikhil Kapadia</h4>
                                            <p className="font-style"> Aspiring Full-Stack Software Developer </p>
                                            <ul className="font-style" style={{fontSize: "11pt"}}>
                                                <li><span role="img" aria-label="Telescope">🔭</span> I’m currently
                                                    working on a few projects to build up my
                                                    portfolio
                                                </li>
                                                <li><span role="img" aria-label="Fruit">🌱</span> I’m currently learning
                                                    Tensorflow
                                                </li>
                                                <li><span role="img" aria-label="Lightning">⚡ </span> Fun fact: I enjoy
                                                    programming for fun and working out
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flip-box">
                                            <a className="flip-anchor" href="/#"><p onClick={this.handleClick}> CLICK ME </p></a>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="card-sizing-back" onClick={this.handleClick}>
                                <Row className="flex">
                                    <Col><h2 style={{color: 'transparent'}}> About Me </h2></Col>
                                </Row>
                                <Row style={{marginTop: "50px"}}>
                                    <Col>
                                        <div className="about-img">
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="about-me">
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </ReactCardFlip>
                        <br/>
                        <br/>
                        <div className="icon-slider">
                            <div className="icon-track">
                                <div className="icon">
                                    <img alt="html4" className="icons"
                                         src="https://img.icons8.com/color/240/000000/html-5.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="css3" className="icons"
                                         src="https://img.icons8.com/color/240/000000/css3.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="javscript" className="icons"
                                         src="https://img.icons8.com/color/240/000000/javascript.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="react" className="icons"
                                         src="https://img.icons8.com/color/240/000000/react-native.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="redux" className="icons"
                                         src="https://img.icons8.com/color/240/000000/redux.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="mongodb" className="icons"
                                         src="https://img.icons8.com/color/240/000000/mongodb.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="golang" className="icons"
                                         src="https://img.icons8.com/color/240/000000/golang.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="kubernetes" className="icons"
                                         src="https://img.icons8.com/color/240/000000/kubernetes.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="docker" className="icons"
                                         src="https://img.icons8.com/color/240/000000/docker.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="github" className="icons"
                                         src="https://img.icons8.com/material-outlined/240/000000/github.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="firebase" className="icons"
                                         src="https://img.icons8.com/color/240/000000/firebase.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="html4" className="icons"
                                         src="https://img.icons8.com/color/240/000000/html-5.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="css3" className="icons"
                                         src="https://img.icons8.com/color/240/000000/css3.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="javscript" className="icons"
                                         src="https://img.icons8.com/color/240/000000/javascript.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="react" className="icons"
                                         src="https://img.icons8.com/color/240/000000/react-native.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="redux" className="icons"
                                         src="https://img.icons8.com/color/240/000000/redux.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="mongodb" className="icons"
                                         src="https://img.icons8.com/color/240/000000/mongodb.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="golang" className="icons"
                                         src="https://img.icons8.com/color/240/000000/golang.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="kubernetes" className="icons"
                                         src="https://img.icons8.com/color/240/000000/kubernetes.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="docker" className="icons"
                                         src="https://img.icons8.com/color/240/000000/docker.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="gitHub" className="icons"
                                         src="https://img.icons8.com/material-outlined/240/000000/github.png"/>
                                </div>
                                <div className="icon">
                                    <img alt="firebase" className="icons"
                                         src="https://img.icons8.com/color/240/000000/firebase.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
