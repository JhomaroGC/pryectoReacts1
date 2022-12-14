import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
// import '../src/assets/css/styles.css';
// import '../src/assets/css/normalize.css';
// import '../src/assets/css/App.css'

// components
import Header from './components/Header';
import Navegacion from './components/Navegacion';
import Vite from './components/Vite';

function App() {

  const [count, setCount] = useState(0);  

  return (
    // <> Fragment lo utilizamos para agrupar varias etiquetas HTML no ve en el navegador  
    <>
     {/* Atraves de los props podemos enviar de componente padre a hijos valores de variables y funciones como parametros  */}
      <Header
        count={count}
      />

      <Navegacion/>

      <Vite
        count={count}
        setCount={setCount}
      />
      
    </>
  )
}

export default App