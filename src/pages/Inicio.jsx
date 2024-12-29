import '../styles/bootstrap/css/bootstrap.css';
import '../styles/style.css';
import Navbar from "../components/Navbar.jsx";
import Head from "../components/Head.jsx";
import ListaLibros from "./ListaLibros.jsx";

function Inicio() {
    return (
        <div>
            <Head></Head>
            <Navbar></Navbar>
            <ListaLibros></ListaLibros>
        </div>

    )
}

export default Inicio