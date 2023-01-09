import React from "react"
import TituloContainer from "../TextoCointainer"
// import { gFetch } from "../helpers/gFetch"
import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { ItemList } from "../items/itemList"

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


// hacer un const loading que tenga el Cargando productos de la linea 79 con un gif de pagina cargando o algo simil


const ItemListContainer = (props) => {
    
  const [ products, setProducts ] = useState([])
  const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { categoriaId } = useParams()




    // useEffect(()=>{
    //   if(categoriaId) {
    //     // traer filtrado
        
            useEffect( ()=> {
                const db = getFirestore() 
                const querycollection = collection(db, 'productos')
                const queryFiltrada = query(querycollection, where('categoria','==',categoriaId))
                
                getDocs(queryFiltrada)
                .then(respuesta => setProducts( respuesta.docs.map(product => ({ id: product.id, ...product.metadata() }) )))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
            }, [])

    //   }else{
    //     // traer todos
        
    //       useEffect(()=>{
    //           const db = getFirestore() 
    //           const querycollection = collection(db, 'productos')
        
    //           getDocs(querycollection)
    //           .then(respuesta => setProducts( respuesta.docs.map(product => ({ id: product.id, ...product.metadata() }) )))
    //           .catch(err => console.log(err))
    //           .finally(()=> setLoading)
    //       }, [])

    //   }
    // })




  
  
  
      // traer uno solo

      // useEffect(()=>{
      //   const db = getFirestore()
      //   const queryDoc= doc(db, 'productos' )
    
      //   getDoc(queryDoc)
      //   .then(respuesta => setProduct ({id: respuesta.id, ...respuesta.data}))
      //   .catch(err=>console.log(err))
      //   .finally(()=>setLoading(false))
      // }, [])


    console.log(product)
    return (
      
      <>
        <div className="center-block"  
            style={{paddingTop: 150}} >
                      
          <TituloContainer greeting={props.texto}/>
          <div className="d-flex" style={{justifyContent: "center"}}>
            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn  ' } to='/Destacado/BAÑO'>
            <button className="btn btn-info ">
              BAÑO
            </button>
            </NavLink>
          
            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn ' } to='/Destacado/COCINA'>
            <button className="btn btn-info ">
              COCINA
            </button>
            </NavLink>

            <NavLink className={ ( { isActive } )=> isActive ? ' btn btn-info btn-block' : 'btn ' } to='/Destacado/HABITACION'>
            <button className="btn btn-info ">
              HABITACION
            </button>
            </NavLink>
          </div>

          { loading ? 
          
            <h2 style={{color: "white",
                        margin: "0 0 auto"}}> Cargando productos ... </h2> 
                                    
                        : 
            
            <ItemList products={products} />
           
           }
    
        
          
      
        </div>
      

     
      </>
    )
      
  }

export default ItemListContainer