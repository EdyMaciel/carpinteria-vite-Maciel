import { Link } from "react-router-dom"

export const Item = ({ product }) =>{
    return(
        
        <div 
            id="CardsId"
            className='col-md-3 w-100 d-flex justify-content-center'
            key={product.id}
        >
                <div className="card w-50 ">
                <div className="card-header text-black">
                    {`${product.name}     -     ${product.category}`}
                </div>
                <div className="card-body d-flex justify-content-around align-items-center text-black ">
                    <img src={product.pic} alt="" className="w-50" />
                    {` $ ${product.price}`}   
                </div>
                <div className="card-footer w-100 d-flex justify-content-center ">
                <Link to={`/detail/${product.id}`} >
                    <button className="btn btn-outline-dark btn-block card_btn">
                        Detalle del producto
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}