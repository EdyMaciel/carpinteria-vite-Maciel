
import { useContext } from "react"
import { useState, createContext } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) =>{
    
    const [cartList, setCartList] = useState([])
    
    const agregarCart = (producto) => {
        
        const idx = cartList.findIndex(product => product.id === producto.id)
        
        if (idx === -1){
            
            setCartList([
                ...cartList,
                producto
            ])
        }else{

            cartList[idx].cantidad += producto.cantidad

            setCartList([ ...cartList ]) 
        }
    } 
    
    const vaciarCarrito = () =>setCartList([])

    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidad * product.price)  , 0)
    
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidad , 0)

    const eliminarItem = (id) => setCartList(cartList.filter(product => product.id !== id))

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            eliminarItem,
        }}>
        {children}
        </CartContext.Provider>
    )
}
