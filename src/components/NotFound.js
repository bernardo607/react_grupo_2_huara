import React from "react";
import imagen404 from '../assets/images/hombres-trabajando.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagen404} alt=" 404 "/>
        </div>
        
    )
}


export default NotFound;