import React, {Component} from 'react';
import Links from './Links'
import './NavBar.css'

class NavBar extends Component {
    state = {
        activeClass: 'nav-wrapper'
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight -1) {
                this.setState({activeClass:'nav-wrapper scrolled' })
            }
            if (window.scrollY < window.innerHeight){
                this.setState({activeClass:'nav-wrapper' })
            }
        });
    }

    render() {
        return (
            <header>
                <nav className={this.state.activeClass}>
                    <div className="container">
                        <a href='#home' className="brand-logo logo anchor mx-auto">
                            <img width="65px" src="img/logo.png" alt="logo"/>
                        </a>
                        <Links/>
                    </div>
                </nav>
            </header>

        )
    }
}

export default NavBar
