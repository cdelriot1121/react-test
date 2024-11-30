import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function HolaReact({ nombre }) {
  return (
    <div>
      <h1>¡Hola, {nombre}!</h1>
      <p>Esta es mi primera aplicación con React y Vite.</p>
    </div>
  );
}

function PedirNombre({ onNombreSubmit }) {
  const [nombre, setNombre] = useState(''); 

  const handleChange = (event) => {
    setNombre(event.target.value); 
  };

  const handleSubmit = () => {
    onNombreSubmit(nombre); 
  };

  return (
    <div className="contenedor-nombre">
      <input
        type="text"
        placeholder="Digite su nombre"
        value={nombre}
        onChange={handleChange}
        className="input-nombre"
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

function App() {
  const [nombre, setNombre] = useState('');

  const handleNombreSubmit = (nombre) => {
    setNombre(nombre);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React test</h1>
      
      <h2>Pedir nombre</h2>
      <PedirNombre onNombreSubmit={handleNombreSubmit} />
      
      <HolaReact nombre={nombre} /> {}
    </>
  );
}

export default App;
