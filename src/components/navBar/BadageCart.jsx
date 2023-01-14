const BadageCart = ({cantidadTotal}) => {

    if (cantidadTotal > 0) {
        return (
                <span 
                className=" badageCart                                    
                            badge 
                            rounded-pill 
                            bg-danger "
                            id="badgeCarrito" >{ cantidadTotal }</span>
                )
    }
}
export default BadageCart