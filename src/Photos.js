import React from "react";
import "./Photos.css";
export default function Photos(props) {
    
    if (props.photos){
    console.log(props.photos);
     return <section className="Photos">
         <div className="row">
         {props.photos.map(function(photo, index){
        return (
            <div className="col-sm-12 col-md-6 col-12 col-xl-4 col-lg-4 col-xxl-4"key={index}>
            <a href={photo.src.original} target="_blank" rel="noreferrer">
            <img src={photo.src.landscape} alt={photo.src.photographer} className="img-fluid"/>
            </a>
            </div>
            )
         })}
         </div>
     </section> 

    } else {
        return null;
    }

   
}