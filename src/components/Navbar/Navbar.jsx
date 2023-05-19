import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/logo.jpeg"
import { Outlet, Link } from "react-router-dom"




const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" >
          <img src={imgLogo} alt="Logo de la Empresa" /></Link>

        <div style={{display:"flex"}}>
          <Link to="/">Todas</Link>
          <Link to="/category/roberts">Robert</Link>
          <Link to="/category/figuras">Figuras</Link>
          <Link to="/category/accesorios">Accesorios</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div>
          <CardWidget />
        </div>

      </div>

      <Outlet />

    </div>
  );
};

export default Navbar;
