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


<div > 
        <article  className="product" >
      
        {   productos.map( p => (   
                                     
                <div className= "product-box" key={p.id}>

                   <table summary="Los productos de chocolate blabla">
  <caption>Los mejores chocolates</caption>
  <thead>
    <tr className='black'>
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Catgoría</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Número total de álbumes</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table> 
                    <div className="box-description">
                    <p  className="detalle">{p.description}</p>
                    <h4 className="descripcion">{p.name}  </h4>
                    <h4 className="descripcion">{p.price}</h4>
                    <h4 className="descripcion">{p.category}</h4>
                
                    </div>    
                </div> 
        ))}
        </article>
        
</div>


      )
 
  }

export default Test;
