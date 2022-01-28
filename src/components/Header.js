import React from 'react';
import logoHuara from '../assets/images/logo-texto-cromatico.PNG'
import '../assets/css/Header.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
   
    <React.Fragment>
<header>
    <div className="box-header">
        <a className="logo-header">
           <img src= {logoHuara} alt="logo-huara" className="logo-header-img"/>
        </a>
        
        
            
            <div className="administrador"><i className="far fa-smile-wink"></i><Link  to="/">   Bienvenido Administrador!</Link></div>
           
            
            
        
    </div>
</header>



</React.Fragment>
  )
}

export default Header;
