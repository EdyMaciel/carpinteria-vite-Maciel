import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavList = () => {
    const navList = [
        {id:'Inicio', name:'Inicio', path:'Inicio', icon: "home-outline" },
        {id:'Galeria', name:'Galeria', path:'Galeria', icon: "camera-outline" },
        {id:'Destacado', name:'Destacado', path:'Destacado', icon: "pricetag-outline" },
        {id:'Contacto', name:'Contacto', path:'Contacto', icon: "chatbubble-outline" },
        {id:'Nosotros', name:'Nosotros', path:'Nosotros', icon: "person-outline" }
    ]
    return (
        navList.map(({id, name, path, icon}) =>   <li className='lista'>
                                                <NavLink 
                                                key={id}
                                                className={( { isActive } )=> isActive ? 'lista__link ' : 'lista__link2' } 
                                                to={`/${path}`}>
                                                <span className="icono_menu">
                                                    <ion-icon name={`${icon}`}></ion-icon>
                                                </span>
                                                <span className={'texto_menu'}> {`${name}`} </span>
                                                </NavLink>
                                            </li> )
    )
}
const MenuContext = () => {

    const menuList = [
        {id:'1', name:'BAÑO',path:'BAÑO' },
        {id:'2', name:'COCINA',path:'COCINA' },
        {id:'3', name:'HABITACIÓN',path:'HABITACIÓN' }
    ]
    
  return (
        menuList.map(({id, name, path}) =>     <NavLink 
                                                key={id}
                                                className={ ( { isActive } )=> isActive ? ' btn-outline-dark btn-block p-2' : ' btn-outline-dark btn-block p-2' } 
                                                to={`/Destacado/${path}`}>
                                                <button className="btn btn-outline-dark btn-block ">
                                                {`${name}`}
                                                </button>
                                                </NavLink> )
  )
}

export default MenuContext