import { Button } from '@mui/material'

import React from 'react'


const Cart = ({ cart, clearCart, deleteProductById, total }) => {
    return (
        <div>
            {cart.map((p) => {
                return (

                    <div style={{display: "flex", justifyContent:"space-evenly", borderBottom: "2px solid blue", margin: "1px", Width: "900px"}}>
                        <div key={p.id}>
                            <h3>Articulo {p.title}</h3>
                            <h3>Cantidad{p.quantity}</h3>
                            <h3>${p.price}</h3>
                            <Button onClick={() => deleteProductById(p.id)}>Eliminar</Button>
                        </div>

                        <div>
                            <img style={{ maxHeight: "300px", maxWidth: "200px" }} src={p.img} alt="" />
                        </div>

                    </div>


                )
            })
            }
            <Button style={{ marginTop: "30px" }} onClick={clearCart} variant='contained'>Borrar Carrito</Button>

            <h2>El total de la compra es {total}</h2>
        </div>
    )
}

export default Cart