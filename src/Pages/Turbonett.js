import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorTurbo from '../Components/BuscadorTurbo';

class Turbonett extends React.Component{

    render(){
        const  valores=  [
            { value: 'inestabilidad', label: 'Inestabilidad WF' },
            { value: 'lentitud', label: 'Lentitud WF'},
            { value: 'sinSeñal', label: 'Sin Señal WF'},
            { value: 'noNavega', label: 'No Navega WF'},

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>TURBONETT</h4>
                <BuscadorTurbo 
                valores={valores} 
                defecto={''}
                ruta= {""}
                />
            </div>
        )
    }
}

export default Turbonett;