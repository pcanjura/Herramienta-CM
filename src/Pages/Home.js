import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Styles/Home.css';
import Topbar from '../Components/Topbar';
import Dth from '../Components/Img/dth.jpg';
import Inalambrico from '../Components/Img/inalambrico.jpeg';
import Inter from '../Components/Img/internet.jpeg';
import Server from '../Components/Img/internet2.jpeg';
import Phone from '../Components/Img/phone.jpeg';
import Hfc from '../Components/Img/tvhfc.jpeg';
import Marquee from 'react-double-marquee';


class Home extends React.Component {


    render() {
        return (
            <div>
                <div className="menu-btn">
                    <i className="fas fa-bars fa-2x"></i>
                </div>

                <div className="container">

                    <Topbar />                

                    <header className="novedades">
                        <h2>Novedades</h2>
                        <div style={{
                            width: '800px',
                            whiteSpace: 'nowrap',
                        }} >
                            <Marquee direction = "left">Canales 1452, 1457, 1455 y 1001, pasan a Paquete Avanzado Plus HD</Marquee>
                        </div>
                        
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}

                        {/* <a href="#" className="btn"> Mas Novedades <i className="fas fa-angle-double-right"></i></a> */}

                    </header>



                    <div className="procesos-list">
                        <div>
                            <img src={Phone} alt="Linea Fija" />
                            <h3>Linea Fija.</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> -Descuentos
                    <br /> -Locucion por mora
                    <br /> -Proceso incompleto
                    <br /> -Aclaraciones sin carta
                </p>
                            <Link to='/LineaFija' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>

                        </div>
                        <div>
                            <img src={Inter} alt="Internet" />
                            <h3>Turbonett</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> - Inestabilidad
                    <br /> - No Navega
                    <br /> - Lentitud
                    <br /> - Sin señal
                </p>
                            <Link to='/Turbonett' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>
                        </div>
                        <div>
                            <img src={Server} alt="Internet HFC" />
                            <h3>Internet HFC</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> - Inestabilidad
                    <br /> - Lentitud
                    <br /> - No Navega
                    <br /> - Sin Navegación cliente con IP Publica
                </p>
                            <Link to='/Hfc' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>
                        </div>
                        <div>
                            <img src={Hfc} alt="Claro TV" />
                            <h3>Claro TV HFC</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> - Algunos canales sin señal
                    <br /> - Problemas de Audio
                    <br /> 
                    <br /> 
                </p>
                            <Link to='/Ctv' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>
                        </div>
                        <div>
                            <img src={Dth} alt="DTH" />
                            <h3>Claro TV Satelital</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> -Algunos canales sin señal
                    <br /> -Problemas de Audio
                    <br /> -Mensaje "Para mayor informacion de este canal"
                    <br /> 
                </p>
                            <Link to='/Dth' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>
                        </div>
                        <div>
                            <img src={Inalambrico} alt="Inalambrico" />
                            <h3>Servicios Inalambricos</h3>
                            <p>Aqui encontraras los siguientes WF:
                    <br /> -
                    <br /> -
                    <br /> -
                    <br /> -
                </p>
                            <Link to='/Inalambrico' >DETALLES<i className="fas fa-angle-double-right">
                            </i></Link>
                        </div>


                    </div>




                </div>



                {/* 
            esta es la seccion de redes si queres usarla 
            solo descomenta la seccion 

   <section className="social">
        <p>Visitanos</p>
        <div className="links">
            <a href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
                <i className="fab fa-instagram"></i>
            </a>

        </div>


    </section>
 */}
                <footer className="footer">
                    <h6>Elaborado por: Pedro Canjura / Kevin Martinez</h6>

                </footer>
            </div>
        )

    }


}


export default Home;