import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";


export const ItemDetail = ({ product, onAdd, cantidadTotal, cart }) => {
    return (
        <div style={{ marginTop: "100px", display: "flex", gap: "30px" }}>
            <div className={styles.containerItemDetail}>
                <div className={styles.containerImage}>
                    <img style={{ maxHeight: "300px", maxWidth: "200px" }} src={product.img} alt="" />
                </div>

                <div className={styles.containerDetail}>
                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "23px" }}>Nombre:</span> {product.title}
                    </h2>
                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
                        {product.description}
                    </h2>
                    <h2 style={{ fontFamily: "monospace" }}>
                        <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}.-
                    </h2>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", }}>
                    <Link to="/">
                        <Button style={{marginRight:"10px"}} variant="contained">Regresar</Button>
                    </Link>
                    {cart.length > 0 &&

                        <Link to="/Cart">
                            <Button variant="contained" color='success'>Comprar</Button>
                        </Link>

                    }
                </div>





            </div>


        </div>
    );
};
