import React from "react";
import Button from "../Button";
import ReactGA from "react-ga";

function About() {

    ReactGA.pageview(window.location.pathname)
    
    return (
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="card mt-3 p-4 w-50">
                    <h1 className="card-title text-center">About Me</h1>
                    <hr></hr>
                    <div className="d-flex justify-content-center">
                        <img src="/img/Me.jpg" className="img-fluid w-75 about-img" alt="Profile Pic"></img>
                    </div>
                    <hr></hr>
                    <div className="card-body text-center">
                        <h2>Mitch Henderson</h2>
                        <p className="card-text">I'm a music business professional, expanding my skills to build new tech tools for the music industry.</p>
                        <p className="card-text">I have 7+ years work experience in digital advertising, web content management, graphic design, and marketing.</p>
                        <p className="card-text">I’m pursuing a career as a Full Stack Web Developer.</p>
                        <p className="card-text">I'm Google Ads & Analytics Certified.</p>
                        <p className="card-text">I love electronic music.</p>
                        <p className="card-text">Let's chat.</p>
                    </div>
                </div>
            </div>
            <Button btnText="contact →" link={"/contact"}/>
        </div>
    );
}

export default About;