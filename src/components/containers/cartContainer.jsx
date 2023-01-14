import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import TituloContainer from "../TextoCointainer"
import { NavLink } from "react-router-dom"

const CartContainer = (props) => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    Cemail:"",
    phone: ""
  })

  const { cartList, vaciarCarrito, precioTotal, eliminarItem, cantidadTotal } = useCartContext()
  const generarOrden = (evt) =>{

    evt.preventDefault()
    const order= {}
    //validaciones
    order.buyer = dataForm

    order.item = cartList.map( ({ name, id, price}) => ({ name, id, price}) )

    const db = getFirestore()
    const queryOrder = collection(db, 'orders')

    addDoc(queryOrder, order)
    .then(resp => console.log(resp) )
    .catch(err =>console.log(err))
    .finally(()=>{
      vaciarCarrito()
      setDataForm({
        name: "",
        email: "",
        Cemail:"",
        phone: ""
      })
    })
  }

  const handleOnChange = (e) =>{
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const [ isFinally, setIsFinally ] = useState(true);

  const ButtonHandler = () => {
    setIsFinally(current => !current)
   
  }


  return (
    <main className="container"    >
      <section className="main_section">
        <TituloContainer greeting={props.texto}/>

        { cantidadTotal() > 0 ? 
        <>
        <div className="row justify-content-center">
          { precioTotal() > 0 && <label className="col-3 align-self-end"> El precio total es: {precioTotal()} </label > } <br/> 
        </div>
          { isFinally ? <>
              <div className="d-flex justify-content-center pt-5 pb-5 ">
                <button 
                className="btn btn-outline-dark p-2 m-4"
                onClick={ButtonHandler}
                >Terminar Compra</button>
              <button 
                className="btn btn-outline-dark p-2 m-4"
                onClick={vaciarCarrito}
                >Vaciar Carrito</button>
              </div>
          </>
          :
          <>
          <section className='foro m-5'>
            <form className='foro_form' onSubmit={generarOrden}>
              <label htmlFor="name">Nombre completo</label>
              <input 
                  type="text"
                  id="name" 
                  name="name"
                  className='text-dark'
                  value={dataForm.name} 
                  placeholder="ingrese el Nombre" 
                  onChange={handleOnChange}
                  required
              ></input>
              <label htmlFor="email">Email</label>
              <input 
                  type="email"
                  id="email" 
                  name="email"
                  className='text-dark'
                  value={dataForm.email} 
                  placeholder="ingrese el Email" 
                  onChange={handleOnChange}
                  required
              ></input>
              <label htmlFor="Cemail">Confirmar Email</label>
              <input 
                  type="email"
                  id="Cemail" 
                  name="Cemail"
                  className='text-dark'
                  value={dataForm.Cemail} 
                  placeholder="ingrese el Email" 
                  onChange={handleOnChange}
                  required
              ></input>
              <label htmlFor="phone">Celular</label>
              <input 
                  type="tel"
                  pattern="[0-9]{9}"
                  id="phone"
                  name="phone" 
                  className='text-dark'
                  value={dataForm.phone} 
                  placeholder="ingrese el numero de Celular" 
                  onChange={handleOnChange}
                  required
              ></input>
              <button
              className="btn_Contacto"
              id='btn_Contacto'
              >Generar Orden</button >
            </form>
          </section>
          </>}
          </>
          :
          <>
          <div className="d-flex justify-content-center mt-5">
          <h3>Carrito vacio</h3>
          </div>
          <div className="d-flex justify-content-center mt-5">
          <NavLink to={'/Inicio'}>
          <button>Regresar al Inicio</button>
          </NavLink>
          <NavLink to={'/Destacado'}>
          <button>Regresar a Descuentos</button>
          </NavLink>
          </div>
          </>
      }

        {cartList.map(product=> <li className="liCartContainer d-flex justify-content-between align-items-center text-light" key={product.id}>
          <img src={product.pic} className="w-25" />
          {product.name} - Cantidad: {product.cantidad} - Precio: {product.price}
          <button className="btn btn-outline-primary" onClick={()=> eliminarItem(product.id) }>X</button>
        </li>)}
        
      </section>
  </main>
  )
}
export default CartContainer