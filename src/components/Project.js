import React from "react";
import ReactGA from "react-ga";

function Project(props) {
    ReactGA.initialize('UA-174302758-1');

    function sendHit(event) {
        ReactGA.ga('send', 'event', 'Link Click', 'click', event.target.dataset.click);
    };

    return (
        <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
            <a data-click={"Try" + props.name.replace(/\s/g, '')} href={props.link} target="_blank" rel="noopener noreferrer" onClick={sendHit}>
                <img src={props.img} className="card-img-top" alt={props.name}></img>
            </a>
            <div className="card-title mt-3 mb-0">
                <h3>{props.name}</h3>
            </div>
            <hr></hr>
            <div className="card-body mt-0 pt-0">
                <p className="card-text mb-3">{props.description}</p>
                <p className="card-text" style={{color: "grey"}}><strong>Tech Stack: </strong>{props.tech}</p>
            </div>
            <div className="row btn-group">
                <a data-click={"View" + props.name.replace(/\s/g, '')} href={props.repo} className="btn btn-secondary mr-1 ml-3" target="_blank" rel="noopener noreferrer" onClick={sendHit}>View Repo</a>
                <a data-click={"Try" + props.name.replace(/\s/g, '')} href={props.link} className="btn btn-secondary ml-1 mr-3" target="_blank" rel="noopener noreferrer" onClick={sendHit}>Try It →</a>
            </div>
        </div>
    )
}

export default Project;