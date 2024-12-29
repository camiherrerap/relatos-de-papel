import React from "react";
import CarritoElementos from "./CarritoElementos.jsx";
import CarritoTotal from "./CarritoTotal.jsx";
import Pago from "./Pago.jsx";


const ContenidoCarrito =() => {
    return (
        <div>
            <CarritoElementos></CarritoElementos>
            <CarritoTotal></CarritoTotal>
            <Pago></Pago>
        </div>
    )
}

export default ContenidoCarrito;