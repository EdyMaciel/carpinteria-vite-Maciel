import { Item } from "./items"

export const ItemList = ({products}) =>{
    
    return(
        
        products.map( product => <Item product={product} /> )
      
    )

}