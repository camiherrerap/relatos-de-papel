import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import VerCarrito from "../pages/VistaCarrito.jsx";

const Head = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/buscar?q=${query}`);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="logo">
                        <img src="/img/logo.png" alt="Relatos de papel" className="logo__image"/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="buscador buscador--header">
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Buscar por título"
                                   value={query}
                                   onChange={(e) => setQuery(e.target.value)}/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-1 comprar">
                    <VerCarrito></VerCarrito>
                </div>
            </div>
        </div>
    );
}

export default Head;