import styles from "./styles.module.scss";

import { INavBarItem } from "../../types";
import { NavLink } from "react-router-dom";

interface INavBarProps {
  options: INavBarItem[];
}

const NavBar = ({ options }: INavBarProps) => {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.list}>
        {options.map(({ path, label }) => {
          return (
            <li className={styles.item} key={path}>
              <NavLink to={path} className={styles.navLink}>
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavBar;
