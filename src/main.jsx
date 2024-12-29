import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import ContextProvider from "./components/Context.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ContextProvider>
  </StrictMode>,
)
