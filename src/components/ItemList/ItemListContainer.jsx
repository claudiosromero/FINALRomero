import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {
        const productsFiltered = products.filter(prod => prod.category === categoryName)
        const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoryName ? productsFiltered : products);
            }, 500);

        });

        tarea
            .then((res) => setItems(res))
            .catch((error) => console.log(error));

    }, [categoryName]);


    if (items.length === 0) {


        return <div style={{ display: "flex", justifyContent: "center", marginTop: "500px" }}>
            <PacmanLoader color="darkblue" />
        </div>

    }


    return (
        <div>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
