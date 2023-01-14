import React from 'react'
import TituloContainer from '../src/components/TextoCointainer'

const Contacto = (props) => {
      return ( 
  <main className='container'>
       <section className="main_section">
        <TituloContainer greeting={props.texto}/> 
            
            <section className="foro">
                <form className="foro_form" id="form" action="" method="" encType="">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="Nombre" id="nombre" placeholder="Nombre" required/>
                    <label htmlFor="asunto">Asunto:</label>
                    <input type="text" name="Asunto" id="asunto" placeholder="Asunto" required/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="Email" placeholder="Email" id="email" required/>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea name="comentarios" id="mensaje" placeholder="Describe brevemente en menos de 150 carácteres" maxLength="150"></textarea>
                    <button id="btn_Contacto" className="btn_Contacto">Enviar</button>
                    
                </form>    
            </section>
            <div className="div__contacto_contacto">
                <ul className="ul__contacto_contacto">
                    <li className="lista__contacto">
                        <span className="icono__contacto">
                            <ion-icon name="mail-outline"></ion-icon>
                        </span>
                        <a href="https://mail.google.com/mail/u/1/#inbox"> 
                            <span className="texto__contacto text-black">enriquelcarpintero@hotmail.com</span>
                        </a>
                    </li>
                    <li className="lista__contacto">
                        <span className="icono__contacto">
                            <ion-icon name="call-outline"></ion-icon>
                        </span>
                        <span className="texto__contacto text-black">23570014</span>
                    </li>
                    <li className="lista__contacto">
                        <span className="icono__contacto">
                            <ion-icon  name="map-outline"></ion-icon>
                        </span>
                        <a href="https://www.google.com.uy/maps/place/Dr.+Jos%C3%A9+Mar%C3%ADa+Silva+4012,+12300+Montevideo,+Departamento+de+Montevideo/@-34.8411339,-56.1893505,17z/data=!3m1!4b1!4m5!3m4!1s0x95a02ac6a95a3573:0x7c633f8ce3aa2c00!8m2!3d-34.8411383!4d-56.1871618?hl=es-419">
                        <span className="texto__contacto ">Jose Maria Silva 4012</span>
                        </a>
                    </li>
                </ul>
                <iframe className="mapa_contacto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.60057550092!2d-56.189350484143624!3d-34.84113387760685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02ac6a95a3573%3A0x7c633f8ce3aa2c00!2sDr.%20Jos%C3%A9%20Mar%C3%ADa%20Silva%204012%2C%2012300%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1658708945432!5m2!1ses-419!2suy"/>
            </div>
        </section>
  </main>
  )
}
export default Contacto