import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (   
        <nav className="navbar navbar-expand-lg navbar-dark position-sticky">
            <img src="../../img/shiftycx_logo.svg" width="125px" className="d-inline-block align-top mr-4 ml-4" alt=""></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to={"./"}>portfolio</Link>
                    <Link className="nav-item nav-link" to={"./about"}>about</Link>
                    <Link className="nav-item nav-link" to={"./contact"}>contact</Link>
                </div>
                <div className="ref-links ml-auto">
                    <div className="row">
                        <a className="nav-item nav-link" href="https://github.com/shiftymitch" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                        </a>
                        <a className="nav-item nav-link" href="https://www.linkedin.com/in/mitch-henderson-a277bb37/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="nav-item nav-link" href="https://docs.google.com/document/d/1WBLuhiQD2WIeMPnhRqUklet1IUU9cASRBs405LGLRvc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-file-text-o"></i>
                        </a>
                    </div>
                    <a className="google-cert align-top" style={{"font-size":".6rem"}} href="https://skillshop.exceedlms.com/profiles/ac123b10222540e3822c9fb147077b5f" target="_blank" rel="noopener noreferrer">
                        Google Ads & Analytics Certified ✓
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;