import React from 'react'
import TituloContainer from '../src/components/TextoCointainer'

const Nosotros = (props) => {
  return (
    <main className='container'>
      <section className="main_section">
          
          <div className="main_nosotros">
              <div className="div__main_nosotros">
                  <div className="texto_1">
                      <TituloContainer greeting={props.texto}/> 
                      <p className="descripcion__nosotros text-black">Desde hace mas de 40 años, nos dedicamos al trabajo de dar forma a la madera, para construir muebles duraderos. Carpinteria fina, de obra o muebleria, con el uso de materiales de alta calidad para brindar gran comodidad y durabilidad de los productos.</p>
                  </div>
                  <div className="texto_2 ">
                      <h2 className="titulo2 text-black">Opciones de servicio</h2>
                      <ul className="ul__main_nosotros ">
                          <li className="lista__nosotros">
                              <span className="texto__contacto text-black">presupuesto sin cargo</span>
                          </li>
                          <li className="lista__nosotros">
                              <span className="texto__contacto text-black">entrega a domicilio</span>
                          </li>
                          <li className="lista__nosotros">
                              <span className="texto__contacto text-black">armado dersarmado de muebles</span>
                          </li>
                      </ul>
                  </div>
                  <div className="texto_3">
                      <h2 className="titulo3 text-black">Ofertas</h2>
                      <ul className="ul__main_nosotros2">
                          <li className="lista__nosotros">
                              <span className="texto__contacto text-black">Servicio de reparacion</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </main>
  )
}
export default Nosotros