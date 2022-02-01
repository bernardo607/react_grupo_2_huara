import React from 'react';
import '../assets/css/SmallCard.css'

function LastUser(props){
    return(
        <div className="col-md-4 mb-4">
            <div>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="black"> Usuario ID: {props.id}</div>
                            <div className="black">Nombre de usuario: {props.name}</div>
                            <div className="black">Apellido de usuario: {props.last_name}</div>
                            <div className="black">Email de usuario: {props.email}</div>
                            <div className="black">Imagen de usuario: {props.image_url}</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LastUser