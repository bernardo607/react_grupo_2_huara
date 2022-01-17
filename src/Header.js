import logoHuara from './logo-huara-mix-sinfondo.png';
import './Header.css';

function Header() {
  return (
   

<header>
    <div className="box-header">
        <a className="logo-header" href="/">
           <img src= {logoHuara} alt="logo-huara" className="logo-header-img"/>
        </a>
        <a href="#" className="hamburger-header">
            <i className="fas fa-align-left"></i>
        </a>
        <ul className="nav-bar-header">
            
            <li ><i className="fas fa-home"> </i><a  href="/">    Home</a></li>
            <li><i className="fas fa-box"> </i><a href="/productos">   Productos</a></li>
            <li><i className="fas fa-door-open"></i> <a href="/usuarios/login">   Login</a></li>
            <li><i className="fas fa-sign-in-alt"></i> <a href="/usuarios/registro">   Registrate</a></li> 
            
        </ul>
    </div>
</header>




  );
}

export default Header;
