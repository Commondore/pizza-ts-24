import Logo from "@components/Layout/Logo";
import styles from "./style.module.css";
import Navigation from "@components/Layout/Navigation";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Navbar;
