import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Head from "../components/Head.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q") || "";
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Cargar todos los datos desde el endpoint general
        fetch("http://localhost:3001/books") // Reemplaza con tu endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Filtrar datos según el término de búsqueda
        if (query && data.length > 0) {
            const results = data.filter((books) =>
                books.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(results);
        }
    }, [query, data]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Head></Head>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <h2 className="pag_titulo">Resultados para "{query}"</h2>
                    {filteredResults.length > 0 ? (
                        <ul className="catalog catalog--des">
                            {filteredResults.map((books, index) => (
                                <li key={index} className="libro libro--catalog col-md-2">
                                    <Link to={`/catalogo/${books.id}`} >
                                        <span className="libro__imagen"><img src={books.portada} alt={books.title}
                                                                             className="img-fluid"/></span>
                                        <h3 className="libro__titulo">{books.title}</h3>
                                        <div className="libro__autor">{books.autor}</div>
                                        <div className="libro__precio">${books.precio}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No se encontraron resultados.</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default SearchResultsPage;
