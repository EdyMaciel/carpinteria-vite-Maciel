import React from 'react'
import TituloContainer from '../src/components/TextoCointainer'

const Inicio = (props) => {
  return (

      <main className='container'>
        <section className='main_container'>
          <TituloContainer greeting={props.texto}/> 
          <div className='div__img_inicio d-flex justify-content-center mt-5'>
            <span><img className='w-100' src="https://drive.google.com/uc?export=view&id=1s-T0oBvZjs2sl4Jxcumb-Gq2hVlf8b6S&rl" alt="cucheta" /></span>
          </div>
          <div className="contacto_inicio d-flex">
                <div className="img_logo__contacto">
                    <img className="img_logo__img" src="https://drive.google.com/uc?export=view&id=1FNme0WzJ9p9yyTmDdCROCnXBeJrq50SH&rl" alt="Carpinteria_maciel_logo"/>
                </div>
                <p className="info_cotacto_inicio"> Desde hace mas de 40 años, nos dedicamos al trabajo de dar forma a la madera, para construir muebles duraderos. Carpinteria fina, de obra o muebleria, con el uso de materiales de alta calidad para brindar gran comodidad y durabilidad de los productos.
                </p>
                <div className="div__contacto_inicio">
                    <ul className="ul__contacto_inicio">
                        <li className="lista_contacto">
                            <span className="icono_menu__contacto">
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwQZrjqJstKrxFPCtdlHvkMFSRRFMbtwvgpWxPGNPxsgPtPwNxhWSXGSQTkLwVRnNFGrMhL">
                                <span className="texto_menu__contacto">enriquelcarpintero@hotmail.com</span>
                            </a>
                        </li>
                        <li className="lista_contacto">
                            <span className="icono_menu__contacto">
                                <ion-icon name="call-outline"></ion-icon>
                            </span>
                            <span className="texto_menu__contacto">23570014</span>
                        </li>
                        <li className="lista_contacto">
                            <span className="icono_menu__contacto">
                                <ion-icon name="map-outline"></ion-icon>
                            </span>
                            <a href="https://www.google.com.uy/maps/place/Dr.+Jos%C3%A9+Mar%C3%ADa+Silva+4012,+12300+Montevideo,+Departamento+de+Montevideo/@-34.8411339,-56.1893505,17z/data=!3m1!4b1!4m5!3m4!1s0x95a02ac6a95a3573:0x7c633f8ce3aa2c00!8m2!3d-34.8411383!4d-56.1871618?hl=es-419">
                                <span className="texto_menu__contacto">Jose Maria Silva 4012</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='div__img_inicio d-flex justify-content-center mt-5 mb-5'>
            <span><img className='w-100' src="https://drive.google.com/uc?export=view&id=1lOwieyM4jp8yIkjLkNdW80C9BQTqvZFX&rl" alt="cucheta" /></span>
          </div>

        </section>
      </main>
  )
}


export default Inicio