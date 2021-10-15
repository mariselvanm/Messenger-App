import React from "react";
import './style.scss';

export default function ContactCard({name}) {
    return(
        <div className="Contact-Card-Container">
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