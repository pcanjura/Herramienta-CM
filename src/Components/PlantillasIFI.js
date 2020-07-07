import React from 'react';
import './Styles/Plantillas.css';


class PlantillasIFI extends React.Component {

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
        if (nextProps.PlantillasIFI === "descuentocuota") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nFactura de reclamo: \nCorreo: \nContactos: \nComentario: ",
                    descripcion: "Se utiliza para aplicar descuentos en la cuota fija del servicio"

                }
            )

        } else if (nextProps.plantilla === "aclaracionsincarta") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nServicio contratado: \nFecha de contrato: \nSolicitudes: \nCorreo: " +
                    "\nContactos: \nComentario: ",
                    descripcion: "Se utiliza cuando cliente indica que no se le ha cumplido parte de su contrato"

                }
            )
        } else if (nextProps.plantilla === "locucion") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nContactos: \nComentario: ",
                    descripcion: " Utilizar cuando cliente reporta locucion por mora o cualquier otra locución"

                }
            )
        } else if (nextProps.plantilla === "cablesbajos") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nDireccion: \nPunto de referencia: \nContactos: \nComentario: ",
                    descripcion: "Utilizar cuando cliente reporte cables bajos fuera de su vivienda pero no le falla su servicio"

                }
            )
        } else if (nextProps.plantilla === "solaceico") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nServicio contratado: \nSolicitudes: \nCorreo: " +
                    "\nContactos: \nComentario: ",
                    descripcion: "Se utiliza para derivar casos a Ceico cuando no se tiene respuesta de las areas correspondientes"

                }
            )

        } else if (nextProps.plantilla === "solaceico") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla: " +
                    "\nID Cliente: \nServicio contratado: \nSolicitudes: \nCorreo: " +
                    "\nContactos: \nComentario: ",
                    descripcion: "Se utiliza para derivar casos a Ceico cuando no se tiene respuesta de las areas correspondientes"

                }
            )

        } else if (nextProps.plantilla === "solaceico") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND con Falla:" +
                    "\nID Cliente: \nServicio contratado: \nSolicitudes: \nCorreo: " +
                    "\nContactos: \nComentario: ",
                    descripcion: "Se utiliza para derivar casos a Ceico cuando no se tiene respuesta de las areas correspondientes"

                }
            )

        } else if (nextProps.plantilla === "bajavigente") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND de gestión: " +
                    "\nID Cliente: \nDUI de titular: \nFecha de vencimiento de contrato: " +
                    "\nEstado del contrato: (Vigente o Vencido) \nCorreo electrónico: \nContacto1: \nContacto2: " +
                    "\nComentario sobre Motivo de Baja: ",
                    descripcion: "Se utiliza para solicitar la baja de contrato vigente, cuando presenta fallas constantes o clientes en ZODA"

                }
            )

        } else if (nextProps.plantilla === "bajavencido") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND de gestión: " +
                    "\nID Cliente: \nDUI de titular: \nFecha de vencimiento de contrato: " +
                    "\nEstado del contrato: (Vigente o Vencido) \nCorreo electrónico: \nContacto1: \nContacto2: " +
                    "\nComentario sobre Motivo de Baja: ",
                    descripcion: "Se utiliza para solicitar la baja del contrato vencido, cliente debe estar al día, " +
                    "con los pagos y sin facturas por vencer"

                }
            )
        } else if (nextProps.plantilla === "norecibefac") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND de gestión: " +
                    "\nID Cliente: \nCorreo: \nFecha de Vencimiento de Fact: " +
                    "\nDireccion: \nContactos: \nComentario: ",
                    descripcion: "Se utiliza cuando cliente indic que su factura no fue entregada en su domicilio"

                }
            )

        } else if (nextProps.plantilla === "procesoincompleto") {
            this.setState(
                {
                    cadena: "Nombre del Ciente: \nNumero del que llama: \nND de gestión: " +
                    "\nID Cliente: \nDui: \nSIV: " +
                    "\nSolicitudes: \nContactos: \nComentario: ",
                    descripcion: "Se utiliza cuando hay información faltante o datos incompletos que aun no se registran en sistema "

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

export default PlantillasIFI;