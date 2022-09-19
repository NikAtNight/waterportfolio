import React, {Component} from 'react'
import './About.css'
import {Card, Col, Row} from "react-bootstrap";
import ReactCardFlip from 'react-card-flip';

class About extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            bCard: {
                width:"80%",
                height:"110%"
            },
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
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" containerStyle={this.state.bCard}>
                            <Card className="card-sizing-front">
                                <Row>
                                    <Col className="title-column col-12 col-sm-12 col-md-12 col-lg-8">
                                        <b><p className="section-title"> About Me </p></b>
                                    </Col>
                                    <Col className="social-column col-12 col-sm-12 col-md-12 col-lg-4">
                                        <div className="social-icon-container">
                                            <a href="https://twitter.com/NikhilKapadia_" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left" alt="twitter" className="icon-size"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/twitter.svg"/>
                                            </a>
                                            <a href="https://github.com/AstroNik" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left"  alt="github"
                                                     className="icon-size2"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/github.svg"/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/nikhilkapadia01/" target="_blank"
                                               rel="noopener noreferrer">
                                                <img align="left" alt="linkedin"
                                                     className="icon-size2"
                                                     src="https://cdn.jsdelivr.net/npm/simple-icons@3.5.0/icons/linkedin.svg"/>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>

                                <Row className="about-card-content">
                                    <Col className="col-lg-3 col-md-4 col-sm-12 img-column">
                                        <div className="about-img">
                                            <img className="img-fix" src="img/octopus.jpg" alt="octopus"/>
                                        </div>
                                    </Col>
                                    <Col className="col-lg-9 col-md-8 col-sm-12">
                                        <div className="about-me">
                                            <h4 className="card-header-title"> Nikhil Kapadia</h4>
                                            <p className="card-subtitle"> Aspiring Full-Stack Software Developer </p>
                                            <br/>
                                            <ul className="font-style">
                                                <li className="card-subtext"><span role="img" aria-label="Telescope">🔭</span> Currently working on building my portfolio
                                                </li>
                                                <li className="card-subtext"><span role="img" aria-label="Fruit">🌱</span> Currently learning
                                                    image recognition using Tensorflow
                                                </li>
                                                <li className="card-subtext"><span role="img" aria-label="Lightning">⚡ </span> Fun fact: I enjoy
                                                    programming for fun and working out
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a className="flip-anchor card-subtext" href="/#"><p onClick={this.handleClick}> CLICK ME </p></a>
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
