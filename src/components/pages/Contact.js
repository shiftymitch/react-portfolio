import React from "react";
import Button from "../Button";
import ReactGA from "react-ga";

function Contact() {
    ReactGA.pageview(window.location.pathname)

    function sendHit(event) {
        ReactGA.ga('send', 'event', 'Link Click', 'click', event.target.id)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="contact-me card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                            <div className="contact-me-card">
                                <h2 className="text-capitalize"><i className="fa fa-envelope"></i> Contact Me</h2>
                                <hr></hr>
                                <p><strong>Mitch Henderson</strong></p>
                                <p>Salt Lake City, UT</p>
                                <p>+1 (801) 599-0413</p>
                                <a href="mailto:shiftymitch@gmail.com"  onClick={sendHit}>
                                    <button id="email" className="btn btn-secondary btn-dark contact-button mb-3">
                                        shiftymitch@gmail.com
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                            <ul>
                                <h2 className="text-capitalize"><i className="fa fa-github"></i> Github</h2>
                                <hr></hr>
                                <li>
                                    <a href="https://github.com/shiftymitch" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                                        <button id="github" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                            <ul>
                                <h2 className="text-capitalize"><i className="fa fa-linkedin"></i> LinkedIn</h2>
                                <hr></hr>
                                <li>
                                    <a href="https://www.linkedin.com/in/mitch-henderson-a277bb37/" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                                        <button id="linkedin" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card m-3 p-3 text-center">
                        <div className="col">
                            <ul>
                                <h2 className="text-capitalize"><i className="fa fa-file-text-o"></i> My Resume</h2>
                                <hr></hr>
                                <li>
                                    <a href="https://docs.google.com/document/d/1eaYadtXdxD4pLtSlofdba9n4iBKFrpWhfv3goER0cj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                                        <button id="resume" className="btn btn-secondary btn-dark contact-button">
                                            <strong>view</strong>
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Button  btnText="← home" link={"/"}/>
            <br></br>
            <br></br>
        </div>
    );
}

export default Contact;