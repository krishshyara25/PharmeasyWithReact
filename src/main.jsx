import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pharmesy from './Pharmeasy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pharmesy/>
  </StrictMode>,
)
