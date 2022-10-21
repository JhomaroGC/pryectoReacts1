import React from 'react'

const Nav = () => {
  return (
    <div className="nav-bg">
        <nav className="navegacion-principal contenedor">
          <a href="index.html">Inicio</a>
          <a id="lista-contacto" href="#">Lista Contactos</a>
          <a id="vite" href="#">Vite</a>
        </nav>
    </div>
  )
}

export default Nav