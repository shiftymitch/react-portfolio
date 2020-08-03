import React from "react";
import Project from "../Project";
import projectData from "../projectData.json";
import Button from "../Button";
import ReactGA from "react-ga";

function Home() {

    ReactGA.pageview(window.location.pathname)
    
    return (
        <div className="container">
            <div className="row justify-content-around">
                {projectData.map(project => {
                    return (
                        <Project
                            key={project.id}
                            description={project.description} 
                            id={project.id}
                            img={project.img} 
                            link={project.link} 
                            name={project.name} 
                            repo={project.repo} 
                            tech={project.tech}
                            >
                        </Project>
                    );
                })}
            </div>
            <Button btnText="about →" link={"/about"}/>
        </div>
    )
}

export default Home;