import {useState}  from 'react'

const useSelected = (item) =>{

    const [ruta, setRuta] = useState('useSelected')
    console.log( "el valor USE: " + item)
    
        
        if (item === "descuento") {
          setRuta("Linea Fija Alambrico > Reclamos >" +
            "Reclamos de facturacion > CTE solicita descuento de cuota fija")
        } else if (item === "vigente") {
    
          setRuta("ruta vigente");
         
    
    
        } else if (item === "vencida") {
          setRuta("ruta vencida")
          
        }

return ruta;

}

export default useSelected;