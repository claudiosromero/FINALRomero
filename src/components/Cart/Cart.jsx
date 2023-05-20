import { Button } from '@mui/material'
import styles from "./Cart.module.css";
import React from 'react'
import { Link, Navigate } from 'react-router-dom';


const Cart = ({ cart, clearCartAlert,  deleteProductById, total, navigate }) => {
    return (
        <div>
            {cart.map((p) => {
                return (
                    <div className={styles.cartPadre}>
                        <div className={styles.cart}>
                            <div key={p.id}>
                                <h3>Articulo: {p.title}</h3>
                                <h3>Cantidad: {p.quantity}</h3>
                                <h3>${p.price}</h3>
                                <Button onClick={() => deleteProductById(p.id)}>Eliminar</Button>
                            </div>
                            <div>
                                <img style={{ maxHeight: "150px", maxWidth: "150px" }} src={p.img} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })
            }
            {
                cart.length > 0 && <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button style={{ marginTop: "30px", marginRight: "10px" }} onClick={clearCartAlert} variant='contained' color='error'>Borrar Carrito</Button>
                    <Button style={{ marginTop: "30px" }} onClick={()=>navigate("/checkout")} variant='contained' color='success'>Comprar</Button>
                </div>
            }
            {
                cart.length > 0 ? (
<div>
                    <h2>El total de la compra es ${total}</h2>
                </div>

                ) : <Link style={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: 300 }} to="/">
                
                <Button variant='contained'>
                Todavia no agregaste nada al carrito... Volve a las categorias para poder elejir el que quieras!
                    
                </Button>
                
                </Link>
                
                
            }
        </div>
    )
}

export default Cart;