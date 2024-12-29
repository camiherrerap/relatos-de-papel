import { createContext , useState} from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const buyLibros = (book)  => {
        const libroRepetido = carrito.find((item) => item.id === book.id);

        if(libroRepetido){
            setCarrito(carrito.map((item) => item.id === book.id ? {...book, cantidad: libroRepetido.cantidad +1} :item));
        }else{
            setCarrito([...carrito, book])
        }

    }

    return (
        <Context.Provider value={{carrito, setCarrito, buyLibros}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;