import { useState } from "react"
import { NavLink } from "react-router-dom"
  
const IsCompletes =  (isComplete, onAdd) => {
    const [count, setCount] = useState(1)
  
    const resCount = () => {if(count > inicial) setCount(count - 1)}

    const sumCount = () => {if (count < stock) setCount(count + 1)}
  
    const handleOnAdd = () => onAdd(count) 
  return (
    <div> 
        {isComplete &&  <>
        <button 
          className="btn btn-sm  btn-outline-success col-2"
          onClick={resCount}> - </button>
          <p className="d-inline d-flex justify-content-center col-2" id="contadorId">{count}</p>
        <button 
          className="btn btn-sm btn-outline-success col-2"
          onClick={sumCount}> + </button>
        <button 
          className="btn btn-outline-success m-md-3 col-md-9 col-7 "
          onClick={ handleOnAdd && isComplete(false)}> Agregar al carrito </button>
          </>
        }
        {!isComplete && <>
            <NavLink to={'/Destacado'}>
            <button 
                className="btn btn-sm  btn-outline-success col-7"
                onClick={resCount}> Seguir Comprando </button>
            </NavLink>
            <NavLink to={'/cart'}>
                <button 
                className="btn btn-sm btn-outline-success col-7"
                > Terminar Compras </button>
            </NavLink>
         
        </>}</div>
  )
}
export default IsCompletes