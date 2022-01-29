import React from 'react';
import '../assets/css/SmallCard.css'

function PanelCat(props){
    return(
        <div className="col-md-4 mb-4">
            <div>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="black"> Nombre categoría: {props.name}</div>
                            <div className="black"> Total productos: {props.count}</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PanelCat