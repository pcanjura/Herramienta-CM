import React, { useState } from 'react';
import Select from 'react-select';
import './Styles/Buscador.css';
import PlantillasDTH from './PlantillasDTH';




const BuscadorDTH = (props) => {

  const defecto = props.defecto;
  const rutaDefecto = props.ruta;
 console.log( 'la ruta es: '+ rutaDefecto)

  const [item, setItem] = useState({defecto})
  const [ruta, setRuta] = useState(rutaDefecto)
  const options = props.valores ;
  
  
  
// esta funcion es la encargada de cambiar la ruta dependiendo del valor
   function handleItem(item) {
    console.log(item.value)
    setItem(item.value);
    if (item.value === "descuento") {
      setRuta("Linea Fija Alambrico > Reclamos >" +
        "Reclamos de facturacion > CTE solicita descuento de cuota fija")
    } else if (item.value === "vigente") {

      setRuta("ruta vigente");
     


    } else if (item.value === "vencida") {
      setRuta("ruta vencida")
      
    }
  } 




  return (
    <div className="buscador">
     {/*  este compoennte es el quemuestra la lista de opcion 
          options: son los valores que mostrara
          si se quiere dejar algun valor de la lista por defecto se debe usar
          defaultValue={options[x]},donde x es el valor del item a mostrar
     */} 
      <Select id="lista" options={options} placeholder="Selecione el Reclamo"
        className="mb-3" onChange={ handleItem }  />

      {/* este componente muestra la ruta  */}
      <label className="ruta">{ruta}</label>
      <br/>
      {/* este compente es el encargado de mostrar la plantilla depenedendo el item que se le pase */}
     <PlantillasDTH plantilla= {item}/>
    </div>
  )

}

export default BuscadorDTH;