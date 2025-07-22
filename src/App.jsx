import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/acerrio' element={<p>Hola desde acerrio</p>} />
        <Route path='/exports' element={<p>Hola desde Exports</p>} />
        <Route path='/buenvivir' element={<p>Hola desde Buenvivir</p>} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='*' element={<p>404 Not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
