import React from "react";
import Project from "../Project";
import projectData from "../projectData.json";
import Button from "../Button";

function Home() {
    return (
        <div className="container">
            <div className="row justify-content-around">
                {projectData.map(project => {
                    return (
                        <Project
                            description={project.description} 
                            id={project.id}
                            img={project.img} 
                            link={project.link} 
                            name={project.name} 
                            repo={project.repo} 
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