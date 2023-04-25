import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from '../../productsMock'
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    // contador


    const [product, setProduct] = useState({})

    //let id = 1;

    const { id } = useParams()

    useEffect(() => {
        let encontrado = products.find(prod => prod.id === +id)

        // simula el tiempo de respuesta del back
        setTimeout(() => {

        }, 2000);
        setProduct(encontrado)
    }, [id])


    return (
        <div>
            <ItemDetail product={product} />

        </div>
    )
}
