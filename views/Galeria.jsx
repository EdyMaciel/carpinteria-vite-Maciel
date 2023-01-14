import React, { useEffect, useState } from 'react'
import TituloContainer from '../src/components/TextoCointainer'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ImgList from '../src/components/images/imgList'

const Galeria = (props) => {

  const [ products, setProducts ] = useState([])

  useEffect(()=>{
    // traer filtrado
    const db = getFirestore() 
    const querycollection = collection(db, 'products')
    
    getDocs(querycollection)
    .then(respuesta => setProducts( respuesta.docs.map(product => ({ id: product.id, ...product.data() }) )))
    .catch(err => console.log(err))
  })

  return (

    <main className='container'>
      <section className="main_section">
            <TituloContainer greeting={props.texto}/> 
            <div className="img_Galeria" >
              <ImgList products={products} />

            </div>
        </section>
  </main>
  )
}
export default Galeria