import React from 'react'

function Card(props){
    return(
        <div>
            <h1> My favorite hobbie is</h1>
            <h3>{props.hobby}</h3>
            <img src ={props.img}/>
            <p>{props.details}</p>
        </div>
    )
}
export default Card;
{/* //rsc */}
 


