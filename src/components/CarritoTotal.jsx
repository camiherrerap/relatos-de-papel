import React, {useContext } from "react";
import { Context } from "/src/components/Context.jsx";

const CarritoTotal = () => {
    const {carrito} = useContext(Context);

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    return (
        <div>
            <h3>Total a pagar: ${total} </h3>
        </div>
    )
}

export default CarritoTotal;