import React from "react";

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-dark position-sticky">
        <img src="../../img/shiftycx_logo.svg" width="125px" className="d-inline-block align-top mr-4 ml-4" alt=""></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="./">portfolio</a>
                <a className="nav-item nav-link" href="./about">about</a>
                <a className="nav-item nav-link" href="./contact">contact</a>
            </div>
            <div className="ref-links ml-auto row">
                <a className="nav-item nav-link" href="https://github.com/shiftymitch"><i className="fa fa-github"></i></a>
                <a className="nav-item nav-link" href="https://www.linkedin.com/in/mitch-henderson-a277bb37/"><i className="fa fa-linkedin"></i></a>
                <a className="nav-item nav-link" href="https://docs.google.com/document/d/1WBLuhiQD2WIeMPnhRqUklet1IUU9cASRBs405LGLRvc/edit?usp=sharing"><i className="fa fa-file-text-o"></i></a>
            </div>
        </div>
    </nav>
}

export default Header;