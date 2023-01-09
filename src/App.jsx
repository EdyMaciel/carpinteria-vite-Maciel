import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import ItemDetailContainer from './components/containers/itemDetailContainer'
import ItemListContainer from './components/containers/ItemListContainer'
import CartContainer from './components/containers/cartContainer'
import Nav from './components/navBar/NavBar'
import './App.css' 




function App() {
 

  return (
    <CartContextProvider>

      <BrowserRouter>

        <Nav />
        
        <Routes>


          <Route path='/Destacado/:categoriaId' element={<ItemListContainer texto="Parte de destacados"  />} />
          <Route path='/Inicio' element={<ItemListContainer texto="Parte de inicio" />} />
          <Route path='/:menuId' element={<ItemListContainer texto="Parte de destacados" />} />
          <Route path='/detail/:productoId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          
          
          
          <Route path='*' element={<Navigate to='/Inicio' />} />

        </Routes>
      
      
      </BrowserRouter>

    </CartContextProvider >
    
 

  
  )
}

export default App
