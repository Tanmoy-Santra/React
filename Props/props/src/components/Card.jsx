import React from "react";

const Card = (props) =>{
    return(
        <>
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
        </>
    )
}

export default Card;