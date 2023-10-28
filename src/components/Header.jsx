import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupueto,
  setIsValidPresupuesto
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupueto?(
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto ={setIsValidPresupuesto}
        />
      ):(
        <NuevoPresupuesto
           presupuesto={presupuesto}
           setPresupuesto={setPresupuesto} 
           setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
        
    </header>
  )
}

export default Header
