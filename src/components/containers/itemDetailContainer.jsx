import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../helpers/gFetch"
import ItemDetail from "../items/itemDetail/itemDetail"

const ItemDetailContainer = () => {

  const {productoId} = useParams()


  const [product, setProduct] = useState({})

  //useEffect -> gFetch(productoId) -> un objeto

  useEffect(()=>{
    gFetch(productoId)
      .then(resp => setProduct(resp))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <ItemDetail 
      product={product}
    />
  )
}

export default ItemDetailContainer