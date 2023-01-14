import { Link } from "react-router-dom"

  const CartWidget = () => {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <Link to={'/cart'}>
          <i className="bi bi-cart " style={{fontSize: 30}}></i>
        </Link>
      </div>
    )
  }

export default CartWidget