import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCard] = useState([]);

    const isInCart = (id) => {
        let existe = cart.some(elemento => elemento.id === id)
        return existe
    }
    const agregarAlCarrito = (producto) => {
        let existe = isInCart(producto.id)

        if (existe) {

            let newCart = cart.map((elemento) => {
                if (elemento.id === producto.id) {
                    return { ...elemento, quantity: producto.quantity }
                } else {
                    return elemento
                }
            })

            setCard(newCart)

        } else {
            setCard([...cart, producto])
        }
    };

    const clearCart = () => {
        setCard([])
    }

    const deleteProductById = (id) => {
        const productosFiltrados = cart.filter((elemento) => elemento.id !== id)
        setCard(productosFiltrados)
    }

    const getTotalPrice = () => {

        let total = cart.reduce((acc, elemento) => {
            return acc + (elemento.price * elemento.quantity)
        }, 0)
        return total
    }

    const getTotalQuantity = () => {

        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity
        }, 0)
        return total
    }

    const getQuantityById = (id) => {
        let product = cart.find(elemento => elemento.id === id)
return product?.quantity

    }

    let data = { cart, agregarAlCarrito, clearCart, deleteProductById, getTotalPrice, getTotalQuantity, getQuantityById };
    return (<CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>);


};

export default CartContextProvider;