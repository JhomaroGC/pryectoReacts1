//rafce para crear la estructura del componente
//Componente es una funcipón que en su return es lo que meustra en el html
import React from 'react'

const Header = ({count}) => {//mire que le pasé el parámetro que tenemos en App dentro de la etiqueta Header
    console.log(count)
  return (
    //Use para convertir HTML a JSX
    <header>
        <h1 className="titulo">Sistema Administracion de Contactos <span>Desarrollo WEB</span></h1>
        <h3>Visitante # {count}</h3>
    </header>
  )
}

export default Header