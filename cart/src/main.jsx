import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Cartcon } from './cartcontext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartcon>
    <App />
    </Cartcon>
  </StrictMode>,
)
