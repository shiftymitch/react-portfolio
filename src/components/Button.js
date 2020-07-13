import React from "react";

function Button(props) {
    return (
        <div class="d-flex justify-content-center mt-5">
            <a href={props.link}>
                <button class="btn btn-lg btn-secondary contact-button">
                {props.btnText}
                </button>
            </a>
        </div>
    );
}

export default Button;