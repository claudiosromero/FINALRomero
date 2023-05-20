import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from '../../productsMock'
import { useParams } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'



export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { agregarAlCarrito, getQuantityById, cart } = useContext(CartContext)

    const { id } = useParams()

    useEffect(() => {
        let encontrado = products.find((prod) => prod.id === Number(id));
        setProduct(encontrado);
    }, [id]);

    const onAdd = (cantidad) => {
        let data = {
            ...product,
            quantity: cantidad
        }

        agregarAlCarrito(data)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Agregaste ${product.title} al Carrito!`,
            showConfirmButton: false,
            timer: 1500
        })

    }

    let cantidadTotal = getQuantityById(product.id)


    return (
        <div>
            <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} cart={cart} />

        </div>
    )
};
