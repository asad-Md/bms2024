import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import No from './pages/No'
import Yes from './pages/Yes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Landing />} />
        <Route path="/yes" element={<Yes />} />
        <Route path="/no" element={<No />} />
      </Routes>
    </BrowserRouter>   
  </StrictMode>,
)
