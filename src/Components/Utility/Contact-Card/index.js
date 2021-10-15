import React from "react";
import './style.scss';

export default function ContactCard({name, select, id, isSelected = null}) {
    return(
        <div className={`Contact-Card-Container ${isSelected ? "select-card": ""}`} onClick={() => select(id)}>
            <div className="left-side">
                I
            </div>
            <div className="right-side">
                <span className="Name-Conatier">{name}</span>
                <span className="Status-Title-Conatier">Hey there...</span>
            </div>
        </div>
    )
}