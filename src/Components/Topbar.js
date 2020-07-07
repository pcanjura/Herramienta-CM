import React from 'react';
import { Link } from 'react-router-dom';
import Claro from '../Components/Img/claro.png';
import './Styles/Home.css';


const Topbar = () => {

    return (
        <div>
           

            <nav className="nav-main">

                <img src={Claro} alt="Claro" className="nav-brand" />

                <ul className="nav-menu">
                    <li>
                        <Link to='/Inicio' >Inicio</Link>
                    </li>
                    <li>
                        <Link to='/LineaFija' >Linea Fija</Link>
                    </li>
                    <li>
                        <Link to='/Turbonett' >Turbonett</Link>
                    </li>
                    <li>
                        <Link to='/Hfc' >Internet HFC</Link>
                    </li>
                    <li>
                        <Link to='/Ctv' >Claro TV HFC</Link>
                    </li>
                    <li>
                        <Link to='/Dth' >Claro TV DTH</Link>
                    </li>
                    <li>
                        <Link to='/Inalambrico' >Servicios Inalambricos</Link>
                    </li>
                </ul>


                <ul className="nav-menu-right">
                    <li>
                        <a href="#">
                            <i className="fas fa-search"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <hr className="hr" />
        </div>
    )

}

export default Topbar;