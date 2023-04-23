import styles from "./CardWidget.module.css"

import { BiCartDownload } from "react-icons/bi"

const CardWidget = () => {
    return (
        <div className={styles.CardWidget}>
            <span>0</span>
            <BiCartDownload size={50} />
        </div>
    )
}

export default CardWidget