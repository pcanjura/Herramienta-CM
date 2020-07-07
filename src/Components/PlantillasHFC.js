import React from 'react';
import './Styles/Plantillas.css';


class PlantillasHFC extends React.Component {

    constructor(props) {
        super(props);
        // este es el valor por defecto que toma la plantilla
        this.state = {
            cadena: "",
            descripcion: ""
        };
        this.hadleChange = this.hadleChange.bind(this); // y recuerden chicos hay que hacer bind a sus eventos 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.plantilla === "inestabilidadhfc") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMAC:\nMarca de Modem:\nNodo:\nContactos:\nComentario:",
                    descripcion: "Se usa cuando reportan Inestabilidad en HFC"

                }
            )

        } else if (nextProps.plantilla === "navlentahfc") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMAC:\nMarca de Modem:\nNodo:\nVelocidad:\nContactos:\nComentario:",
                    descripcion: "Se usa cuando reportan lentitud en HFC"

                }
            )
        } else if (nextProps.plantilla === "nonavegahfc") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMAC:\nMarca de Modem:\nNodo:\nContactos:\nComentario:",
                    descripcion: "Se usa cuando reportan sin navegacion en HFC"

                }
            )
        } else if (nextProps.plantilla === "sinaccesoapag") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMAC:\nMarca de Modem:\nContactos:\nComentario:",
                    descripcion: "Cuando el cliente no accede a una o varias paginas"
                }
            )
        } else if (nextProps.plantilla === "sinnavegacionip") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMAC:\nMarca de Modem:\nNodo:\nContactos:\nComentario:",
                    descripcion: "Si cliente no navega y tiene ip publia asignada"
                }
            )
        }
    }

    hadleChange(event){
        console.log(event)
        this.setState({
            cadena: event.target.value
          });
    }

    render() {
        console.log("el valor actual es:", this.state.cadena)
        return (
            <div  className="cont">
                <textarea 
                 className="plantilla" rows="4" cols="40"
                value={this.state.cadena} 
                onChange={this.hadleChange}
                ></textarea>
                <div style={{color: 'white' , marginLeft:'10%', display: 'inline'}}>
                    <label>Descripción:</label>
                    <br/>
                    <label >{this.state.descripcion}</label>
                </div>
      
            </div>
        )
    }

}

export default PlantillasHFC;