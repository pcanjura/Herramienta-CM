import React from 'react';
import Buscador from '../Components/Buscador';
import Topbar from '../Components/Topbar';
import '../Components/Styles/WF.css';



class LineaFija extends React.Component {

    render() {
        // estos valores son los que se mostraran en la lista de procesos 
    const  valores=  [
            { value: 'descuentocuota', label: 'Cliente solicita descuento de cuota fija WF' },
            { value: 'locucion', label: 'Cliente al dia locucion mora activa - WF'}, 
            { value: 'aclaracionsincarta', label: 'Reclamo Aclaraciones / Sin Carta WF'},
            { value: 'cablesbajos', label: 'Lineas o cables bajos WF'}, 
            { value: 'solaceico', label: 'Reclamo de Sol escalado a CEICO WF'},
            { value: 'bajavigente', label: 'Solicitud de baja con contrato vigente WF'},
            { value: 'bajavencido', label: 'Solicitud baja C Vencido Reforma Ley2019 WF'},
            { value: 'norecibefac', label: 'No recibe factura / Direccion Correcta WF'},
            { value: 'procesoincompleto', label: 'Mala actitud Proceso Incompleto'},
            
            

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>LINEA FIJA</h4>
                <Buscador 
                valores={valores} 
                defecto={''}
                ruta={''}
                />
            </div>
        )

    }

}

export default LineaFija;