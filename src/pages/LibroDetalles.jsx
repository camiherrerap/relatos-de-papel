import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/Head.jsx";
import Navbar from "../components/Navbar.jsx";
import { Context } from "/src/components/Context.jsx";

const LibroDetalles = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const {buyLibros} = useContext(Context);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await fetch(`http://localhost:3001/books/${id}`);
            const data = await response.json();
            setBook(data);
        };
        fetchBookDetails();
    }, [id]);

    if (!book) {
        console.log(id);
        return <div>Libro no encontrado...</div>;
    }

    return (
        <div>
            <Head></Head>
            <Navbar></Navbar>
            <div className="container text-center">
                <div className="row cardBook">
                    <div className="col-md-4">
                        <div className="cardBook--imagen">
                            <img src={book.portada} alt={book.title} className="img-fluid card__img"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card--titulo">
                            <h2>{book.title}</h2>
                        </div>
                        <div className="card__autor">
                            <h3>{book.autor}</h3>
                        </div>
                        <div className="card--editorial editor">
                            <div className="editor__info"><span className="editor__titulo">Editorial</span> <span
                                className="editor__info">{book.editorial}</span>
                            </div>
                        </div>
                        <div className="card__precio">
                            <div>${book.precio}</div>
                        </div>
                        <div className="card__sku">
                            <div>SKU: {book.sku}</div>
                        </div>
                        <button onClick={() => buyLibros(book)}>Agregar al carrito</button>
                        <div className="card__info detalle">
                        <div className="detalle__libro">
                                <span className="detalle__titulo">Formato</span>{book.formato}
                            </div>
                            <div className="detalle__libro">
                                <span className="detalle__titulo">Edición</span> {book.edicion}
                            </div>
                            <div className="detalle__libro">
                                <span className="detalle__titulo">Categorías </span> {book.categorias}
                            </div>
                            <div className="detalle__libro">
                                <span className="detalle__titulo">Idioma</span> {book.idioma}
                            </div>
                            <div className="detalle__libro">
                                <span className="detalle__titulo">Número de páginas </span> {book.numero_pag}
                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="row cardBook">
                    <div className="col-md-12">
                        <span className="detalle__titulo">Descripción</span> {book.descripcion}
                    </div>
                </div>


            </div>
        </div>

    );
};

export default LibroDetalles;
