import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
createRoot(document.getElementById('root')).render(
  // <StrictMode>

    <BrowserRouter>
    <StyledEngineProvider>
      <App />
      </StyledEngineProvider>
    </BrowserRouter>
  // </StrictMode>,
)
