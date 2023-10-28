import { useState,useEffect } from "react"
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos,presupuesto}) => {

    const[disponible,setDisposible]=useState(0)
    const[gastado,setGastado]=useState(0)
    const [porcentaje,setPorcentaje]=useState(0)

   useEffect(()=>{
        const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad +total,0)
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto)* 100).toFixed(2);
        setGastado(totalGastado)
        setDisposible(totalDisponible)
        //Calcular porcentaje gastado
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)  
        }, 1000);
   },[gastos])
    
    
    const formatearCantidad =(cantidad) =>{
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className=" contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
           <CircularProgressbar
           styles={buildStyles({
                pathColor:'#3B8F62',
                trailColor: '#F5F5F5',
                textColor:'#3B82F6'
           })}
           value={porcentaje}
           text={`${porcentaje}% Gastodo`}
           /> 
        </div>
        <div className=" contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Cantidad gastada: </span>{formatearCantidad(gastado)}
            </p>
            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
        </div>
    </div>

  )
}

export default ControlPresupuesto
