import {Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaLibros from "./pages/ListaLibros.jsx";
import LibroDetalles from "./pages/LibroDetalles.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ResultadoBusqueda from "./pages/ResultadoBusqueda.jsx";
import ContenidoCarrito from "./components/ContenidoCarrito.jsx";

function App() {

  return (
           <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/catalogo" element={<ListaLibros />} />
              <Route path="/catalogo/:id" element={<LibroDetalles />} />
              <Route path="/buscar" element={<ResultadoBusqueda />} />
              <Route path="/carrito" element={<ContenidoCarrito />} />
          </Routes>
  )
}

export default App