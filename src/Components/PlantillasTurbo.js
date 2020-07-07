import React from 'react';
import './Styles/Plantillas.css';


class PlantillasTurbo extends React.Component {

    constructor(props) {
        super(props);
        // este es el valor por defecto que toma la plantilla
        this.state = {
            cadena: " ",
            descripcion: " "
        };
        this.hadleChange = this.hadleChange.bind(this); // y recuerden chicos hay que hacer bind a sus eventos 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.plantilla === "inestabilidad") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMarca de Modem:\nVelocidad:\nContactos:\nComentarios:",
                    descripcion: "Fallas por Inestabilidad ADSL"

                }
            )

        } else if (nextProps.plantilla === "lentitud") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMarca de Modem:\nVelocidad:\nContactos:\nComentarios:",
                    descripcion: "Fallas por Lentitud en ADSL"

                }
            )
        } else if (nextProps.plantilla === "sinSeñal") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMarca de Modem:\nVelocidad:\nContactos:\nComentarios:",
                    descripcion: "Fallas por Sin Señal en ADSL"

                }
            )
        } else if (nextProps.plantilla === "noNavega") {
            this.setState(
                {
                    cadena: "Nombre del cliente:\nNumero del que llama:\nND con falla:" +
                    "\nID cliente:\nMarca de Modem:\nVelocidad:\nContactos:\nComentarios:",
                    descripcion: "Fallas por No Navega en ADSL"
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
                <div style={{color: 'white' , marginLeft:'10%', display:'inline'}}>
                    <label>Descripción:</label>
                    <br/>
                    <label >{this.state.descripcion}</label>
                </div>
      
            </div>
        )
    }

}

export default PlantillasTurbo;