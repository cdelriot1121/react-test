import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';



function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Por qué estoy aprendiendo</li>
        </ul>
      </nav>
    </div>
  );
}


function PageContent({ activePage }) {
  return (
    <div className="page-content">
      {activePage === "inicio" && <h2>¡Bienvenido a la Página Principal!</h2>}
      {activePage === "acerca" && <h2>Acerca de</h2>}
      {activePage === "por-que" && <h2>Por qué estoy aprendiendo React</h2>}
    </div>
  );
}


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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("inicio");

  const handleNombreSubmit = (nombre) => {
    setNombre(nombre);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="container-inicio">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React test</h1>
        <h2>Pedir nombre</h2>
        <PedirNombre onNombreSubmit={handleNombreSubmit} />
        <HolaReact nombre={nombre} />

        <div className="app">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div
            className={`main-content ${isSidebarOpen ? "with-sidebar" : "without-sidebar"}`}
          >
            <PageContent activePage={activePage} />
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
