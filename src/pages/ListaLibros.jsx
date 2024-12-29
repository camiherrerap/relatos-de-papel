import React, {useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "/src/components/Context.jsx";

const ListaLibros = () => {
    const [books, setBooks] = useState([]);
    const {buyLibros} = useContext(Context);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("https://relatosdepapelunir.netlify.app/.netlify/functions/books");
            const data = await response.json();
            setBooks(data);
        };
        fetchBooks();
    }, [])



    return (
        <div className="container">
            <div className="row">
                <h1 className="clasificado">Destacados</h1>
                <ul className="catalog catalog--des">
                    {books.map((book) => (
                        <li key={book.id} className="libro libro--catalog col-md-2">
                            <Link to={`/catalogo/${book.id}`}>
                                <span className="libro__imagen"><img src={book.portada} alt={book.title}
                                                                     className="img-fluid"/></span>
                                <h3 className="libro__titulo">{book.title}</h3>
                                <div className="libro__autor">{book.autor}</div>
                                <div className="libro__precio">${book.precio}</div>
                            </Link>
                            <button onClick={() => buyLibros(book)}>Agregar al carrito</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListaLibros;

