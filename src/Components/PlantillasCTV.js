import React from 'react';
import './Styles/Plantillas.css';


class PlantillasCTV extends React.Component {

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
        if (nextProps.plantilla === "") {
            this.setState(
                {
                    cadena: "",
                    descripcion: ""

                }
            )

        } else if (nextProps.plantilla === "") {
            this.setState(
                {
                    cadena: "" ,
                    descripcion: "  "

                }
            )
        } else if (nextProps.plantilla === "") {
            this.setState(
                {
                    cadena: "",
                    descripcion: " "

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

export default PlantillasCTV;