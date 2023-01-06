import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

  const { cartList, vaciarCarrito } = useCartContext()
  
  console.log(cartList)

  return (
    <div style={{marginTop: 200,
                 color: "white"}}    >
                  {cartList.map(product=> <li key={product.id}>
                    
                    <img src={product.foto} className="w-25" />
                    
                    {product.name} - Cantidad: {product.cantidad} - Precio: {product.price}
                    
                    <button className="btn btn-outline-primary" onClick={()=>console.log("eliminando Item")}>X</button>

                    
                  </li>)}
                  <button 
                    className="btn btn-outline-danger"
                    onClick={vaciarCarrito}
                    >Vaciar Carrito</button>
                 </div>
  )
}

export default CartContainer