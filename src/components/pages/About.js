import React from "react";
import Button from "../Button";

function About() {
    return (
        <div class="container">
            <div class="row d-flex justify-content-around">
                <div class="card mt-3 p-4 w-50">
                    <h1 class="card-title text-center">About Me</h1>
                    <hr></hr>
                    <div class="d-flex justify-content-center">
                        <img src="/img/Me.jpg" class="img-fluid w-75 about-img" alt="Profile Pic"></img>
                    </div>
                    <hr></hr>
                    <div class="card-body text-center">
                        <h2>Mitch Henderson</h2>
                        <p class="card-text">I'm a music business professional, expanding my skills to build new tech tools for the music industry.</p>
                    </div>
                </div>
            </div>
            <Button btnText="contact →" link={"/contact"}/>
        </div>
    );
}

export default About;