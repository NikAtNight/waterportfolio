import React, {Component} from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min';

class NavBar extends Component {
    state = {
        activeClass: 'nav-wrapper'
    };

    componentDidMount() {
        let sidenav = document.querySelector('#sidebar');
        M.Sidenav.init(sidenav, {});

        document.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight - 1) {
                this.setState({activeClass: 'nav-wrapper scrolled'})
            }
            if (window.scrollY < window.innerHeight - 1) {
                this.setState({activeClass: 'nav-wrapper'})
            }
        });
    }

    render() {
        return (
            <header>
                <nav className={this.state.activeClass}>
                    <div className="container">
                        <div>
                            <Link to={'/'} data-target="sidebar" className="sidenav-trigger anchor">
                                <i className="fa fa-bars"> </i>
                            </Link>
                        </div>
                        <a href='#home' className="brand-logo anchor logo mt-0 h-100">
                            <img width="65px" src="img/logo.png" alt="logo"/>
                        </a>
                        <div>
                            <ul className="right link-text hide-on-med-and-down">
                                <li><a className="anchor" href='#home'> Home </a></li>
                                <li><a className="anchor" href='#about'> About </a></li>
                                <li><a className="anchor" href='#projects'> Projects </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul id="sidebar" className="sidenav">
                    <div className="outer">
                        <div className="sidenav-content">
                            <li><a className="anchor sidenav-close" href='#home'> Home </a></li>
                            <li><a className="anchor sidenav-close" href='#about'> About </a></li>
                            <li><a className="anchor sidenav-close" href='#projects'> Projects </a></li>
                        </div>
                    </div>

                </ul>
            </header>

        )
    }
}

export default NavBar
