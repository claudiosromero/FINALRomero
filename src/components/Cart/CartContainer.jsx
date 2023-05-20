import React from "react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
    const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(CartContext)

const navigate = useNavigate()




    let clearCartAlert = () => {
        Swal.fire({
            title: 'Seguro que vas a vaciar el carrito completo?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `NO`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                clearCart()
                Swal.fire('Tu carrito esta vacio...', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Perfecto! Los productos siguen en tu carrito!', '', 'info')
            }
        })
    }

    let total = getTotalPrice()

    return <div>
        <Cart total={total} cart={cart} deleteProductById={deleteProductById} clearCartAlert={clearCartAlert} navigate={navigate}/>
    </div>;
};

export default CartContainer;
