import styles from "./ItemListContainer.module.css"


const ItemList = ({ saludo, nombre }) => {



    return (
        <div className={styles.ItemListContainer}>
            <h2>{saludo}</h2>
            <h2>{nombre}</h2>
            <h2>A</h2>
            <h1>Gallogamer3D</h1>
        </div>

    )
}

export default ItemList