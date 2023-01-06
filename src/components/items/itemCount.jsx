import { useState } from "react"

const ItemCount = ( { stock=5, inicial=1, onAdd } ) => {
    const [contador, setContador] = useState(1)
  
  
    const resCount = () => {if(contador > inicial) setContador(contador - 1)}

    const sumCount = () => {if (contador < stock) setContador(contador + 1)}
  
    const handleOnAdd = () => onAdd(contador)

    return(
     <div className="row  d-flex justify-content-center row-cols-2 ">
      
        
              
        <button 
          className="btn btn-sm  btn-outline-success col-2"
          onClick={resCount}> - </button>
          <p className="d-inline d-flex justify-content-center col-2" id="contadorId">{contador}</p>
        <button 
          className="btn btn-sm btn-outline-success col-2"
          onClick={sumCount}> + </button>
          
        <button 
          className="btn btn-outline-success m-md-3 col-md-9 col-7 "
          onClick={ handleOnAdd }> Agregar al carrito </button>
        
     
     
        

     </div>
        
  
      
      )
  }

export default ItemCount