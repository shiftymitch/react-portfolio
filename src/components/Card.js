import React from "react";

function Card(props) {
    return <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.img} className="card-img-top" alt={props.name}></img>
        </a>
        <div className="card-title mt-3 mb-0">
            <h3>{props.name}</h3>
        </div>
        <hr></hr>
        <div className="card-body mt-0 pt-0">
            <p className="card-text mb-4">{props.description}</p>
        </div>
        <div className="row btn-group">
            <a href={props.repo} className="btn btn-secondary mr-1 ml-3" target="_blank" rel="noopener noreferrer">View Repo</a>
            <a href={props.link} className="btn btn-secondary ml-1 mr-3">Try It →</a>
        </div>
    </div>
}

export default Card;