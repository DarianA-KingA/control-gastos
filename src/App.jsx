import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './Helpers'

function App() {
  const[presupuesto, setPresupuesto]= useState(0)
  const [isValidPresupueto,setIsValidPresupuesto]= useState(false)
  const [modal,setModal]=useState(false)
  const [animarModal,setAnimarModal]=useState(false)
  const [gastos,setGastos]=useState([])



  const handleNuevoGasto = () =>{
    setModal(true)
    setTimeout(() => {
       setAnimarModal(true)
    }, 500);
  }
  const guardarGasto = gasto =>{
      gasto.id = generarId();
      setGastos([...gastos,gasto])

      setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
         }, 500);
  }
  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupueto={isValidPresupueto}
          setIsValidPresupuesto ={setIsValidPresupuesto}
        />
        {
          isValidPresupueto&&(
            <div className=' nuevo-gasto'>
              <img 
              src={IconoNuevoGasto} 
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto} 
              />
            </div>
          )
        }
        {
          modal&& 
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
          />
        }
      </div>
    </>
  )
}

export default App
