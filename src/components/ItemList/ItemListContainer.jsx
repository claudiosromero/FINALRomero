import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../products.Mock";

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            resolve(products);
        });

        task
            .then((res) => setItems(res))
            .catch((error) => console.log("catch: ", error));
    }, [])

    return (
        <div>
            <ItemList items={items} />
        </div>

    );
};

export default ItemListContainer;