import React, {Component} from 'react'
import {Card, Row} from 'react-bootstrap'
import './Work.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardContainer from "./CardContainer";

class Work extends Component {
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
            <section id="projects" className="home-section">
                <div className="w-content">
                    <div className="work-content">
                        <h1 className="font-style-title"> Projects </h1>
                        <br/>
                        <br/>
                        <Row className="justify-content-between flex-row-reverse h-50">
                            <CardContainer
                                img={null}
                                noLogo={"Algorithmic Piano"}
                                title={"Piano Algorithm"}
                                subTitle={"Personal Project"}
                                subSubTitle={"Under Construction"}
                                web={"#"}
                                repo={"https://github.com/AstroNik/PianoApp"}
                            />
                            <CardContainer
                                img={"img/stockOps.png"}
                                size={"190px"}
                                alt={"stockOps"}
                                title={"Stock Options"}
                                subTitle={"Personal Project"}
                                subSubTitle={"Under Construction"}
                                web={"#"}
                                repo={"https://github.com/AstroNik/StockApp"}
                            />
                            <CardContainer
                                img={"img/ecodersLogo.png"}
                                size={"90px"}
                                alt={"ecoders"}
                                title={"ECOders"}
                                subTitle={"School Project"}
                                subSubTitle={"Under Construction"}
                                web={"https://www.ecoders.ca"}
                                repo={"https://github.com/AstroNik"}
                            />

                        </Row>
                        <Row className="justify-content-between flex-row-reverse h-50">
                            <Row className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card className="work-card ripple">
                                    <div className="card-content">
                                        <div className="img-centering">
                                            <img className="img-width" src="img/questionMark.png" alt="question"/>
                                        </div>
                                    </div>
                                </Card>
                            </Row>
                            <Row className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card className="work-card ripple">
                                    <div className="card-content">
                                        <div className="img-centering">
                                            <img className="img-width" src="img/questionMark.png" alt="question"/>
                                        </div>
                                    </div>
                                </Card>
                            </Row>
                            <Row className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <Card className="work-card ripple">
                                    <div className="card-content">
                                        <div className="img-centering">
                                            <img className="img-width" src="img/questionMark.png" alt="question"/>
                                        </div>
                                    </div>
                                </Card>
                            </Row>
                        </Row>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work
