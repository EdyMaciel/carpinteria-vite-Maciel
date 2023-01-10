import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()
  
  console.log(cartList)

  return (
    <div style={{marginTop: 200,
                 color: "white"}}    >
                  {cartList.map(product=> <li key={product.id}>
                    
                    <img src={product.foto} className="w-25" />
                    
                    {product.name} - Cantidad: {product.cantidad} - Precio: {product.price}
                    
                    <button className="btn btn-outline-primary" onClick={()=> eliminarItem(product.id) }>X</button>

                    
                  </li>)}

                  // Precio total es la suma total de todas las compras
                  { precioTotal() > 0 && <label> El precio total es: {precioTotal()} </label> } 
                  
                  
                  <button 
                    className="btn btn-outline-danger"
                    onClick={vaciarCarrito}
                    >Vaciar Carrito</button>
                 </div>
  )
}

export default CartContainer