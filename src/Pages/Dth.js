import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorDTH from '../Components/BuscadorDTH';

class Dth extends React.Component{
    render(){
        const  valores=  [
            { value: '', label: '' },
            { value: '', label: '' },
            { value: '', label: '' },
            { value: '', label: ''},
            {value: '', label: ''},

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>CLARO TV DTH</h4>
                <BuscadorDTH 
                valores={valores} 
                defecto={''}
                ruta={""}
                />
            </div>
        )
    }

}

export default Dth;