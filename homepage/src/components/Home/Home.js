import React, {Component} from 'react'
import SeaScene from "../MainAnimation/SeaScene";
import About from "./About/About";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <SeaScene/>
                <About/>
                <Work/>
                <Footer/>
            </div>
        );
    }
}

export default Home