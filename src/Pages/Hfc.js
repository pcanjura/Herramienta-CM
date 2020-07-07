import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorHFC from '../Components/BuscadorHFC';

class Hfc extends React.Component{

    render(){
        const  valores=  [
            { value: 'inestabilidadhfc', label: 'Inestabilidad en HFC WF' },
            { value: 'navlentahfc', label: 'Navegacion lenta en HFC WF' },
            { value: 'nonavegahfc', label: 'No navega en HFC WF' },
            { value: 'sinaccesoapag', label: 'No puede acceder a una o varias paginas HFC WF'},
            {value: 'sinnavegacionip', label: 'Sin navegacion cliente con IP Publica HFC WF'},

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>INTERNET HFC</h4>
                <BuscadorHFC
                valores={valores} 
                defecto={''}
                ruta={""}
                />
            </div>
        )
    }

}

export default Hfc;