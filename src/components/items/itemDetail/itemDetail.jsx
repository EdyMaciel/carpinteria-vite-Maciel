import ItemCount from "../itemCount"
import {useCartContext} from "../../../context/CartContext"

const ItemDetail = ({ product }) => {
  const { agregarCart} =  useCartContext()
  
  const onAdd = (cantidad) => {
    agregarCart({ ...product, cantidad })
  }

  return (
    <div className="row ms-5 d-flex justify-content-center" >
       <div className="col-6 d-flex justify-content-center flex-wrap">
          <div className="card-header w-100 rounded">
            <p className="text-white fs-3 al-center d-flex justify-content-center m-md-3">{product.name}</p> 
          </div>
          <div className="card-body">
            <img src={product.pic} className="imgDetalle" alt="bacha de baño" />
          </div>
       </div>
       <div className="col-6 d-flex align-content-center flex-wrap">
          <ItemCount 
            inicial={1}
            onAdd={onAdd}
          />
       </div>
    </div>
  )
}
export default ItemDetail