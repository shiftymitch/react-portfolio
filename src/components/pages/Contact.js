import React from "react";
import Button from "../Button";

function Contact() {
    return (
        <div class="container">
            <div class="row d-flex justify-content-around">
                <div class="contact-me card-group">
                    <div class="card m-3 p-3 text-center">
                        <div class="col">
                            <div class="contact-me-card">
                                <h2 class="text-capitalize">Contact Me</h2>
                                <hr></hr>
                                <p><strong>Mitch Henderson</strong></p>
                                <p>Salt Lake City, UT</p>
                                <p>+1(801)599-0413</p>
                                <a href="mailto:shiftymitch@gmail.com">
                                    <button class="btn btn-secondary btn-dark contact-button mb-3">
                                        shiftymitch@gmail.com
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button btnText="← portfolio" link={"/"}/>
        </div>
    );
}

export default Contact;