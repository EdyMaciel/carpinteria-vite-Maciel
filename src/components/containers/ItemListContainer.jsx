import React from "react"
import TituloContainer from "../TextoCointainer"
import MenuContext from "../../context/menuContext"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "../items/itemList"
import { collection,getDocs,getFirestore, query, where } from 'firebase/firestore'

// hacer un const loading que tenga el Cargando productos de la linea 79 con un gif de pagina cargando o algo simil

const ItemListContainer = (props) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoriaId } = useParams()

    useEffect(()=>{
      // traer filtrado
      const db = getFirestore() 
      const querycollection = collection(db, 'products')
      
      const queryFiltrada = categoriaId ? query(querycollection, where('category','==',categoriaId)) : querycollection
      
      getDocs(queryFiltrada)
      .then(respuesta => setProducts( respuesta.docs.map(product => ({ id: product.id, ...product.data() }) )))
      .catch(err => swal({
        icon: 'error',
        title: 'Oops...',
        text: `${err}`
      }))
      .finally(()=> setLoading(false))
    })

    return (
      <>
        <main className="container"  >
          <section className="main_section">    
            <TituloContainer greeting={props.texto}/>
            <div className="d-flex" style={{justifyContent: "center"}}>
              <MenuContext />
            </div>
            { loading ? <h2 style={{color: "black",
                                    margin: "0 0 auto"}}>Cargando productos ...</h2> 
                                    : 
                                    <ItemList products={products} />
            }
          </section>
        </main>
      </>
    )
  }
export default ItemListContainer