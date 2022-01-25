import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/BarraLateral.css'

function BarraLateral(){
    return(
        <React.Fragment>
            <div class="barra-lat">
            <ul className="navbar-left" id="accordionSidebar">

               
                
                <li className="dash">
                    <Link className="nav-link" to="/">
                    <span>  Dashboard - Huara Chocolates</span></Link>
                </li>

                
                <hr className="sidebar-divider"/>

              
                

                <div className="listado">
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>  Pages</span>
                    </Link>
                </li>
                <br></br>
                <li className="nav-item">
                <Link className="nav-link" to="/search">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>  Buscador</span>
                    </Link>
                </li>
                <br></br>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>  Charts</span></Link>
                </li>
                <br></br>
                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/charts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>  Tables</span></Link>
                </li>
                <br></br>
                </div>
                
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            </div>
        </React.Fragment>
    )
}
export default BarraLateral;