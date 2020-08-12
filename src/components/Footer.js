import React from "react";

function Footer() {
    return <footer className="footer mt-5">
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <h5 className="text-light">[site & background designed by <a href="https://github.com/shiftymitch" target="_blank" rel="noopener noreferrer">Mitch Henderson</a>]</h5>
            </div>
            <p className="text-light">&copy; Copyright 2020</p>
            <a href="https://github.com/shiftymitch/react-portfolio" target="_blank" rel="noopener noreferrer" > <button className="btn btn-sm text-light">View This Portfolio Repo</button> </a>
        </div>
    </footer>;
}

export default Footer;