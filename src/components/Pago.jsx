import React, {useContext, useState } from "react";
import {Context} from "./Context.jsx";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function Pago() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const {carrito, setCarrito} = useContext(Context);
    const clearCart = () => {
        setCarrito([]);
        navigate("/inicio")
        setShow(false)

    };

    return (
        <>
            {carrito.length > 0 && (
                <Button variant="primary" onClick={handleShow}>
                    Finalizar Compra
                </Button>
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h3>Pago Finalizado</h3></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={clearCart}>
                        Vaciar Carrito
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default Pago;