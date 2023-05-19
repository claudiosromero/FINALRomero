import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from '../../productsMock'
import { useParams } from "react-router-dom"
import { createContext } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { agregarAlCarrito, getQuantityById } = useContext(CartContext)

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


    }

    let cantidadTotal = getQuantityById(product.id)


    return (
        <div>
            <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} />

        </div>
    )
}
