import { FaDolly, FaPizzaSlice } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import cn from "clsx";

import styles from "./style.module.css";

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={cn(styles.link, {
          [styles.active]: pathname === "/",
        })}
      >
        <FaPizzaSlice />
        <span>Конструктор пиццы</span>
      </NavLink>
      <NavLink
        to="/orders"
        className={cn(styles.link, {
          [styles.active]: pathname === "/orders",
        })}
      >
        <FaDolly />
        <span>Заказы</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
