import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css"

import imgLogo from "../../assets/images/logo.jpeg"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img src={imgLogo} alt="Logo de la Empresa" />
      <ul>
        <li>Home</li>
        <li>Robert</li>
        <li>Figuras</li>
        <li>Accesorios</li>
        <li>Contacto</li>
      </ul>
      <CardWidget />
    </div>
  );
};

export default Navbar;
