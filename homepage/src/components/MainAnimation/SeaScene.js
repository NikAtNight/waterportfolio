import React from 'react'
import {Canvas, extend, useFrame, useThree} from "react-three-fiber"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import PolyWater from "./PolyWater/PolyWater";
import './SeaScene.css'

extend({OrbitControls})

const Controls = () => {
    const {camera, gl} = useThree();

    useFrame(() => {
        camera.position.set(25, 12.5, -20)
        camera.rotation.set(-1.5, 0, 0)
    })

    return (
        <orbitControls
            args={[camera, gl.domElement]}
        />
    )
}

const SeaScene = () => {
    return (
        <section id="home" className="home-section">
            <Canvas>
                <ambientLight intensity={0.2}/>
                <directionalLight color={0xffffff} position={[0, 50, 30]}/>
                <Controls/>
                <PolyWater/>
            </Canvas>
            <div id="overlay">
                <div className="overlay-content">
                    <h1 className="overlay-content-h1">
                        CLICK TO CREATE RANDOM RIPPLES
                    </h1>
                    {/*<div style={{textAlign: "center", marginTop: "5%"}}>*/}
                    {/*    <a className="anchor waves-effect waves-light btn-large" style={{borderRadius: "3em"}}*/}
                    {/*       href="/">Contact</a>*/}
                    {/*    <a style={{borderRadius: "3em", marginLeft: "5%"}}*/}
                    {/*       className="anchor waves-effect waves-light btn-large" href="/">Resume</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default SeaScene;
