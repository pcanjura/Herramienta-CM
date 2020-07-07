import React from 'react';
import './Styles/Plantillas.css';


class PlantillasDTH extends React.Component {

    constructor(props) {
        super(props);
        // este es el valor por defecto que toma la plantilla
        this.state = {
            cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
            "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:",
            descripcion: " Aqui debe ir una descrpcion"
        };
        this.hadleChange = this.hadleChange.bind(this); // y recuerden chicos hay que hacer bind a sus eventos 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.plantilla === "descuento") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:",
                    descripcion: "descuento"

                }
            )

        } else if (nextProps.plantilla === "vigente") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nSOLICITUD:\nCOMENTARIO DEL RECLAMO:" ,
                    descripcion: "vigente "

                }
            )
        } else if (nextProps.plantilla === "vencida") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nSOLICITUD:\nDIAS VENCIDOS:\nCOMENTARIO DEL RECLAMO:",
                    descripcion: " vencida"

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
                    <label>descripción:</label>
                    <br/>
                    <label >{this.state.descripcion}</label>
                </div>
      
            </div>
        )
    }

}

export default PlantillasDTH;