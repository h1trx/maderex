import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'
import { Exports } from './pages/Exports.jsx'
import { Aserrio } from './pages/Aserrio.jsx'
import { Buenvivir } from './pages/Buenvivir.jsx'

function App() {
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
  )
}

export default App
