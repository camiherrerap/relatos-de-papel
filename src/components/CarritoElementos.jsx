import React, {useContext } from "react";
import { Context } from "/src/components/Context.jsx";
import CarritoCantidadLibro from "./CarritoCantidadLibro";

const CarritoElementos = () => {
    const {carrito, setCarrito} = useContext(Context);

    const eliminarLibros = (id) => {
        const eliminarId = carrito.find((element) => element.id === id);

        const nuevoCarrito = carrito.filter((element) => {
            return element !== eliminarId
        })

        setCarrito(nuevoCarrito);

    }

    return carrito.map((book) => {
        return (

            <div key={book.id} className="carrito">
                <div className="container text-center">
                    <div className="row cardBook">
                        <div className="col-md-4">
                            <span className="carrito__agregar"><img src={book.portada} alt={book.title}
                                                                    className="img-fluid"/></span>
                        </div>
                        <div className="col-md-8">
                            <button className="btn carrito__eliminar" onClick={() => eliminarLibros(book.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                </svg>
                            </button>
                            <h3 className="carrito__titulo">{book.title}</h3>
                            <CarritoCantidadLibro book={book}/>
                            <div className="carrito__precio">${book.precio * book.cantidad}</div>
                        </div>
                    </div>
                </div>


            </div>

        )
    })

}

export default CarritoElementos