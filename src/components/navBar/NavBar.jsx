import CartWidget from '../CartWidget'
import { Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { NavList } from '../../context/menuContext'
import BadageCart from './BadageCart'
import '../../App.css'

function Nav() {

  const { cantidadTotal } = useCartContext()  
  return (

    <header className="d-flex align-items-center justify-content-center headerNav position-relative ">
      <div className="col-2 logo-header  ">
        <Link to='/'><img className='img' src="https://drive.google.com/uc?export=view&id=1FNme0WzJ9p9yyTmDdCROCnXBeJrq50SH&rl" width="150" height="120" alt="Carpinteria de muebles Maciel" /></Link> 
      </div>
      <nav className="navegacion">
        <ul className='menu'>
          <NavList />
        </ul>
      </nav>
      <div className="justify-content-center cart">
        <div>
            <CartWidget />
            <BadageCart cantidadTotal={cantidadTotal()}/>
        </div>
      </div>
    </header>
  )
}
export default Nav