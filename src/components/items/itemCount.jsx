import { useState } from "react"
import { NavLink } from "react-router-dom"

const ItemCount = ( { stock=5, inicial=1, onAdd} ) => {
    const [count, setCount] = useState(1)
  
    const resCount = () => {if(count > inicial) setCount(count - 1)}

    const sumCount = () => {if (count < stock) setCount(count + 1)}
  
    const handleOnAdd = () => onAdd(count) 

    const [ isComplete, setIsComplete ] = useState(true);

    const ButtonHandler = () => {
      setIsComplete(current => !current)
      console.log(isComplete)
    }

    return(
      <>
      <div className="row  d-flex justify-content-center row-cols-2">
       { isComplete ? <>
              <button 
              className="btn btn-sm  btn-outline-success col-2"
              onClick={resCount}> - </button>
              <p className="d-inline d-flex justify-content-center col-2" id="contadorId">{count}</p>
              <button 
                className="btn btn-sm btn-outline-success col-2"
                onClick={sumCount}> + </button>
              <button 
                className="btn btn-outline-success m-md-3 col-md-9 col-7 "
                onClick={ ButtonHandler}> Agregar al carrito </button>
              </>
              :
              <>
              <NavLink to={'/Destacado'}>
              <button 
                className="btn btn-sm  btn-outline-success col-8 p-2"
                onClick={handleOnAdd}> Seguir Comprando </button>
              </NavLink>
              <NavLink to={'/cart'}>
                <button 
                  className="btn btn-sm btn-outline-success col-8"
                  onClick={handleOnAdd}
                  > Terminar Compras </button>
              </NavLink>
              </>
        }
      </div>
     </>
      )
  }
export default ItemCount