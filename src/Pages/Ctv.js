import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorCTV from '../Components/BuscadorCTV';

class Ctv extends React.Component{
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
                <h4 style={{color: 'white' , textAlign: 'center'}}>CLARO TV HFC</h4>
                <BuscadorCTV
                valores={valores} 
                defecto={''}
                ruta= {""}
                />
            </div>
        )
    }

}

export default Ctv;