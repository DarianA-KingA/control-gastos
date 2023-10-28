import { useState,useEffect } from "react"
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

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
    const handleResetApp = () =>{
        const resultado = confirm("Deseas reiniciar presupuesto y gastos")
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }
  return (
    <div className=" contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
           <CircularProgressbar
           styles={buildStyles({
                pathColor: porcentaje>100?"#DC2626":"#3B82F6",
                trailColor: '#DC2626',
                textColor: porcentaje>100?"red":"#3B82F6"
           })}
           value={porcentaje}
           text={`${porcentaje}% Gastado`}
           /> 
        </div>
        <div className=" contenido-presupuesto">
            <button 
            className=" reset-app" 
            type="button"
            onClick={handleResetApp}
            >
                Resetar App
            </button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible<0?"negativo":""}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Cantidad gastada: </span>{formatearCantidad(gastado)}
            </p>
            
        </div>
    </div>

  )
}

export default ControlPresupuesto
