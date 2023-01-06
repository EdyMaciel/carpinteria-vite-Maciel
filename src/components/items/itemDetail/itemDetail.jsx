import ItemCount from "../itemCount"
import {useCartContext} from "../../../context/CartContext"

const ItemDetail = ({ product }) => {

  const { agregarCart, cartList } =  useCartContext()
  
  const onAdd = (cantidad) => {
    
    console.log("Cantidad del producto seleccionados: "+cantidad)
    agregarCart({ ...product, cantidad })
  }
  

  return (
    <div className="row ms-5 d-flex justify-content-center" style={{marginTop: 200}}>
       <div className="col-3 d-flex justify-content-center flex-wrap">
        <div className="card-header">
          <p className="text-white fs-3 al-center d-flex justify-content-center m-md-3">{product.name}</p> 
        </div>
        <div className="card-body">
          <img src={product.foto} className="imgDetalle" alt="bacha de baño" />
        </div>
         
          
       </div>
       <div className="col-4 d-flex align-content-center flex-wrap">
          <ItemCount 
            stock={5}
            inicial={1}
            onAdd={onAdd}
          />
       </div>

    </div>
  )
}

export default ItemDetail