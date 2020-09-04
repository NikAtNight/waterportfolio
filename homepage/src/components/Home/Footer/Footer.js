import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text font-style-title">Made Using:</h5>
                        <p className="grey-text text-lighten-4 font-style">
                            React & Go & Deployed on Kubernetes
                        </p>
                    </div>
                    <div className="col l2 offset-l2 s12">
                        <p className="white-text font-style">Disclaimer: Not Optimized For Mobile</p>
                        {/*<ul>*/}
                        {/*    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>*/}
                        {/*    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>*/}
                        {/*    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>*/}
                        {/*    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright
                    <a className="grey-text text-lighten-4 right font-style"
                       href="https://github.com/AstroNik/nkwebapp" rel="noopener noreferrer"
                       target="_blank">
                        Source Code
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
