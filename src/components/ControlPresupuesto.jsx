import { useState,useEffect } from "react"

const ControlPresupuesto = ({gastos,presupuesto}) => {

    const[disponible,setDisposible]=useState(0)
    const[gastado,setGastado]=useState(0)

   useEffect(()=>{
        const totalGastado = gastos.reduce((total,gasto)=>gasto.cantidad +total,0)
        const totalDisponible = presupuesto - totalGastado;
        console.log(totalDisponible)
        setGastado(totalGastado)
        setDisposible(totalDisponible)
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
           <p>Grafica aqui</p> 
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
