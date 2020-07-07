import React, { useState } from 'react';
import Select from 'react-select';
import './Styles/Buscador.css';
import Plantillas from '../Components/Plantillas';



const Buscador = (props) => {

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
    if (item.value === "descuentocuota") {
      setRuta("Reclamos/ Reclamos de facturacion/ Cliente solicita descuento de cuota fija WF")

    } else if (item.value === "locucion") {
      setRuta("Reclamos/ Servicios Bloqueados/ Cliente al dia locucion mora activa - WF");
      
    } else if (item.value === "aclaracionsincarta") {
      setRuta("Reclamos/ Reclamos de facturacion/ Reclamo Aclaraciones - Sin Carta WF");

    } else if (item.value === "cablesbajos") {
      setRuta("Reclamos/ Averia/ Lineas o cables bajos WF");

    } else if (item.value === "solaceico") {
      setRuta("Reclamos/ Reincidencia de Llamadas/ Reclamo de Sol escalado a CEICO WF");

    } else if (item.value === "bajavigente") {
      setRuta("Cancelaciones/ WF Seguimiento/ Solicitud de baja con contrato vigente WF");

    } else if (item.value === "bajavencido") {
      setRuta("Cancelaciones/ WF Seguimiento/ Solicitud baja C Vencido Reforma Ley2019 WF");

    } else if (item.value === "norecibefac") {
      setRuta("Reclamos/ Entrega de Factura/ No recibe factura - Direccion Correcta WF");
      
    }else if (item.value === "procesoincompleto") {
    setRuta("Reclamos/ Mala atención al cliente/ Proceso incompleto WF");

    }


  } 




  return (
    <div className="buscador">
     {/*  este compoennte es el quemuestra la lista de opcion 
          options: son los valores que mostrara
          si se quiere dejar algun valor de la lista por defecto se debe usar
          defaultValue={options[x]},donde x es el valor del item a mostrar
     */} 
      <Select id="lista" options={options} placeholder="Selecione el WF o digitelo"
        className="mb-3" onChange={ handleItem }  />

      {/* este componente muestra la ruta  */}
      <label className="ruta">{ruta}</label>
      <br/>
      {/* este compente es el encargado de mostrar la plantilla depenedendo el item que se le pase */}
     <Plantillas plantilla= {item}/>
    </div>
  )

}

export default Buscador;