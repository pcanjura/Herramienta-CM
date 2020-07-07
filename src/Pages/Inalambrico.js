import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorIFI from '../Components/BuscadorIFI';

class Inalambrico extends React.Component{
    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'sol vigente' },
            { value: 'vencida', label: 'sol vencida' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}> SERVICIOS INALAMBRICOS</h4>
                <BuscadorIFI
                valores={valores} 
                defecto={'Descuentito'}
                ruta={" Internet Inalambrico > reclamos > soporte > WF No Navega IFI"}
                />
            </div>
        )
    }

}

export default Inalambrico;