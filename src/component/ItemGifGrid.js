import React from 'react';



export const ItemGrif = ({title,url})=>{

    return (
        <div className="card animate__animated animate__zoomIn">
            <h3>{title}</h3>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>

    )
}