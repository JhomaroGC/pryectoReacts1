import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//components, importamos los componentes
import Header from './components/Header';
import Nav from './components/Nav';
import MainR from './components/MainR'; 

function App() { //Este es el componente padre de todo y puede pasarle props a sus hijos
  const [count, setCount] = useState(0)

  //un prop es pasar parámetros, de padre a hijo

  return (
    <div className="App">
      <Header
        count = {count} //mire que pasé la variable count de la function App
      /> {/*Aqui estoy colocando el Header que importé en la linea 6*/}
      
      <Nav/>
      <MainR/>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    
  )
}

export default App
