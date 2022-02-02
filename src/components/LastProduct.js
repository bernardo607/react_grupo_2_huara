import React from 'react';
import '../assets/css/SmallCard.css'
import '../assets/css/LastProduct.css'

function LastProduct(props){
    return(
        <div className="hijo-last-product">
            <div>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="black">
                                 <img src={props.image} alt='imagen producto' className="imagen-last-product"/> 
                            </div>
                            <div className="black"> Producto ID: {props.id}</div>
                            <div className="black">Nombre: {props.name}</div>
                            <div className="black">Descripción: {props.description}</div>
                            <div className="black">Precio: {props.price}</div>                     
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LastProduct