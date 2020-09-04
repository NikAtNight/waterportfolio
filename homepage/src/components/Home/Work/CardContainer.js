import React from 'react'
import './Work.css'
import Flippy, {BackSide, FrontSide} from "react-flippy";
import {Row,Col, Button} from "react-bootstrap";

const CardContainer = (props) => {
    const {img,noLogo,size,alt,title,subTitle,subSubTitle,web, repo} = props

    return (
        <Flippy flipOnHover={true} flipOnClick={false} flipDirection="horizontal"
                style={{width: "30%", height: "80%"}}>
            <FrontSide style={{display: "block", textAlign: "center", backgroundColor: "white"}}>
                <div style={{display: "block",marginTop: "10%"}}>
                    {img != null ? (
                        <img width={size} src={img} alt={alt}/>
                    ) : (
                        <h3 className="font-style-title"> {noLogo}</h3>
                    )
                    }

                </div>
            </FrontSide>
            <BackSide style={{display: "block", textAlign: "center", backgroundColor: "#2d92c4"}}>
                <div className="card-content">
                    <h3 className="font-style-title"> {title} </h3>
                    <p className="construction-text"> {subTitle} </p>
                    <p className="construction-text"> {subSubTitle} </p>
                    <Row>
                        <Col>
                            <Button>
                                <a href={web} target="_blank" style={{color: "white", textDecoration:"none"}} rel="noopener noreferrer">
                                    <p className="font-style">Website</p>
                                </a>
                            </Button>
                        </Col>
                        <Col>
                            <Button>
                                <a href={repo} target="_blank" style={{color: "white", textDecoration:"none"}} rel="noopener noreferrer">
                                    <p className="font-style">GitHub</p>
                                </a>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </BackSide>
        </Flippy>
    )
}

export default CardContainer
