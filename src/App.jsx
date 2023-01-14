import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import ItemDetailContainer from './components/containers/itemDetailContainer'
import ItemListContainer from './components/containers/ItemListContainer'
import CartContainer from './components/containers/cartContainer'
import Nav from './components/navBar/NavBar'
import './App.css' 
import Inicio from '../views/Inicio'
import Galeria from '../views/Galeria'
import Contacto from '../views/Contacto'
import Nosotros from '../views/Nosotros'




function App() {
 

  return (

    <>
    <CartContextProvider>

      <BrowserRouter>

        <Nav />
        
        <Routes>


          <Route path='/Destacado/:categoriaId' element={<ItemListContainer texto="Destacado"/>} />
          <Route path='/Inicio' element={<Inicio texto="Inicio" />} />
          <Route path='/Galeria' element={<Galeria texto="Galeria"/>} />
          <Route path='/Destacado' element={<ItemListContainer texto="Destacado" />} />
          <Route path='/Contacto' element={<Contacto texto="Contacto"/>} />
          <Route path='/Nosotros' element={<Nosotros texto="Nosotros"/>} />
          <Route path='/detail/:productoId' element={<ItemDetailContainer texto="Sección compra"/>} />
          <Route path='/cart' element={<CartContainer texto="Carrito"/>} />
          
          
          
          <Route path='*' element={<Navigate to='/Inicio' />} />

        </Routes>
      
      
      </BrowserRouter>

    </CartContextProvider >
    

    <footer>
        <nav>
            <p>Author: Edy Maciel </p>
        </nav>
        
    </footer>
    
    </>

  
  )
}

export default App
