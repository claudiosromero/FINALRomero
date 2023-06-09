import { BiCartDownload } from "react-icons/bi";
import styles from "./CardWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";




const CardWidget = () => {

    const { getTotalQuantity, cart } = useContext(CartContext)

    let total = getTotalQuantity()

    if (cart.length > 0) {

        return (
            <Link to="/cart">
                <div className={styles.CardWidget}>
                    <span>{total}</span>
                    <BiCartDownload size={50} />
                </div>
            </Link>
        )
    }
}



export default CardWidget;