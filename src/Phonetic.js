import React from "react";
import "./Phonetic.css";
import playerbot from "./audiobot-icon.png";


export default function Phonetic(props) {
    let audio = new Audio(props.phonetic.audio);

    function handleClick(event){
        audio.play();
    }
    
    return (
        <div className="Phonetic">
            <img src={playerbot} alt="audio" onClick={handleClick} className="img-audiobot-icon"/>
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}