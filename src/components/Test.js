import { useState, useEffect } from 'react';
import '../assets/css/Test.css'


function Test() {
  
const [productos, setProductos] = useState([])

useEffect ( () => {
    fetch('http://localhost:3001/api/products/')
    .then(response => (response.json()))
    .then(data => {setProductos(data.products)} )
    .catch(error => console.error(error))
  }, []);

 

  return (


<div> 
        <article  className="product" >
      
        {   productos.map( p => (   
                                     
                <div className= "product-box" key={p.id}>
                    
                    <div className="box-description">
                    <p  className="detalle">{p.description}</p>
                    <h4 className="descripcion">{p.name}  </h4>
                    <h4 className="descripcion">{p.price}</h4>
                    <h4 className="descripcion">{p.category}</h4>
                    <h4 className="titulo">Listado de productos</h4>
                    </div>    
                </div> 
        ))}
        </article>
        
</div>


      )
 
  }

export default Test;
