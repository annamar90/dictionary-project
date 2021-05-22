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
            <p className="text">{props.phonetic.text}</p>
            <img src={playerbot} alt="audio" onClick={handleClick} className="img-audiobot-icon"/>
            <p className="ClickandListen">Click the icon and listen!</p>
            </div>
    );
}