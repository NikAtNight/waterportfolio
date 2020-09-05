import React, {useEffect, useState} from 'react'
import './Work.css'
import Flippy, {BackSide, FrontSide} from "react-flippy";
import {Button, Col, Row} from "react-bootstrap";

const CardContainer = (props) => {
    const {img, noLogo, size, alt, title, subTitle, subSubTitle, web, repo} = props

    const [cardProp,setCardProp] = useState({})
    const [cardContent, setCardContent] = useState(false)

    useEffect(() => {
        if(window.innerWidth >= 0) {
            setCardProp({
                width: "100%",
                height: "60px",
                overflow: "hidden",
            })
            setCardContent(false)
        }
        if(window.innerWidth >= 576){
            setCardProp({
                width: "100%",
                height: "60px",
                overflow: "hidden",
            })
            setCardContent(false)
        }
        if(window.innerWidth >= 768){
            setCardProp({
                width: "100%",
                height: "150px",
            })
            setCardContent(false)
        }
        if(window.innerWidth >= 992){
            setCardProp({
                width: "100%",
                height: "175px",
            })
            setCardContent(true)
        }
        if(window.innerWidth >= 1200){
            setCardProp({
                width: "100%",
                height: "220px",
            })
            setCardContent(true)
        }
    })

    return (
        <Row className="col-lg-4 col-md-4 col-sm-12">
            <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal"
                    style={cardProp}>
                <FrontSide style={{display: "block", textAlign: "center", backgroundColor: "white"}}>
                    <div className="img-container">
                        {img != null ? (
                            <img width={size} src={img} alt={alt}/>
                        ) : (
                            <h3 className="font-style-title"> {noLogo}</h3>
                        )
                        }

                    </div>
                </FrontSide>
                <BackSide style={{display: "block", textAlign: "center", backgroundColor: "#2d92c4"}}>
                    {cardContent ? (
                        <div className="card-content">

                            <h3 className="font-style-title"> {title} </h3>
                            <p className="construction-text" style={{margin: 0,}}> {subTitle} </p>
                            <p className="construction-text" style={{margin: 0,}}> {subSubTitle} </p>
                            <Row>
                                <Col>
                                    <Button>
                                        <a href={web} target="_blank" style={{color: "white", textDecoration: "none"}}
                                           rel="noopener noreferrer">
                                            <p className="font-style">Website</p>
                                        </a>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button>
                                        <a href={repo} target="_blank" style={{color: "white", textDecoration: "none"}}
                                           rel="noopener noreferrer">
                                            <p className="font-style">GitHub</p>
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <div className="card-content">
                            <Row style={{height: "100%", paddingTop: "0px"}}>
                                <Col>
                                    <Button>
                                        <a href={web} target="_blank" style={{color: "white", textDecoration: "none"}}
                                           rel="noopener noreferrer">
                                            <p className="font-style">Website</p>
                                        </a>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button>
                                        <a href={repo} target="_blank" style={{color: "white", textDecoration: "none"}}
                                           rel="noopener noreferrer">
                                            <p className="font-style">GitHub</p>
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </BackSide>
            </Flippy>
        </Row>
    )
}

export default CardContainer
