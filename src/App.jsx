import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'
import { Exports } from './pages/Exports.jsx'
import { Aserrio } from './pages/Aserrio.jsx'
import { Buenvivir } from './pages/Buenvivir.jsx'
import { SiteConfigProvider, useSiteConfig } from './context/SiteConfigContext'

// Componente interno que maneja las rutas y loading
const AppContent = () => {
  const { loading, error } = useSiteConfig();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Cargando configuración...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem',
        color: '#e74c3c',
        textAlign: 'center'
      }}>
        <h2>Error al cargar la configuración</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/acerrio' element={<Aserrio/>} />
        <Route path='/exports' element={<Exports />}/>
        <Route path='/buenvivir' element={<Buenvivir/>} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='*' element={<p>404 Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

// Componente App principal que provee el contexto
function App() {
  return (
    <SiteConfigProvider>
      <AppContent />
    </SiteConfigProvider>
  );
}

export default App
