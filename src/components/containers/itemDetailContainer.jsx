import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "../items/itemDetail/itemDetail"
import TituloContainer from "../TextoCointainer"
import swal from "sweetalert"

const ItemDetailContainer = (props) => {
  const {productoId} = useParams()
  const [product, setProduct] = useState({})

  useEffect(()=>{
        const db = getFirestore()
        const queryDoc= doc(db, 'products', productoId )
    
        getDoc(queryDoc)
        .then(respuesta => setProduct ({id: respuesta.id, ...respuesta.data() }))
        .catch(err=>swal({
          icon: 'error',
          title: 'Oops...',
          text: `${err}`,
        }))
  }, [])

  return (
    <main className="container">
      <section className="main_container">
      <TituloContainer greeting={props.texto}/>
      <ItemDetail 
        product={product}
      />
      </section>
    </main>
  )
}
export default ItemDetailContainer