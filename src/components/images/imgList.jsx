import ImgContainer from "./img"

const ImgList = ({products}) => {
  return (
    products.map( product => <ImgContainer product={product} /> )
  )
}
export default ImgList