import React from "react";
import Card from "./Card";
import cardData from "./cardData.json"

function Body() {
    return (
        <div className="container">
            <div className="row justify-content-around">
                {cardData.map(card => {
                    return (
                        <Card
                            description={card.description} 
                            id={1} 
                            img={card.img} 
                            link={card.link} 
                            name={card.name} 
                            repo={card.repo} 
                            >
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}

export default Body;