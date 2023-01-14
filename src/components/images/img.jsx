const ImgContainer = ({product}) => {
   
  return (
        <img className="img" src={product.pic} alt={`${product.name}`}  />
  )
}

export default ImgContainer