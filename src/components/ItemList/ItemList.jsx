import ItemCard from "./ItemCard"
import styles from "./ItemListContainer.module.css"


const ItemList = ({ items }) => {

    return (

        <main className={styles.ItemListContainerMain}>
            <div className={styles.ItemListContainer}>

                {
                    items.map((item) => {
                        return (
                            <ItemCard item={item} key={item.id} />
                        )
                    })
                }

            </div>

        </main>


    )
}

export default ItemList