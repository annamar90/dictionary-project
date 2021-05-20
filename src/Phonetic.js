import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";


export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank">
                Listen
            </a>
            
            <span className="text">{props.phonetic.text}</span>

        </div>
    );
}