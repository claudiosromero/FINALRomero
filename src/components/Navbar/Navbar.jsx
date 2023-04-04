import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h1>@gallogamer3d</h1>
      <ul>
        <li>Home</li>
        <li>Robert</li>
        <li>Figuras</li>
        <li>Para tu Mascota</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
