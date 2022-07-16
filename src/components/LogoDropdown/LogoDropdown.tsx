import {
  ReactNode,
  MouseEvent as ReactMouseEvent,
  useRef,
  useState,
} from "react";
import { NavLink } from "react-router-dom";

import WhiteBurger from "../../assets/burger-icon--white.svg?url";
import BlackBurger from "../../assets/burger-icon--black.svg?url";
import styles from "./style.module.scss";

import { ITopic } from "../../types";

interface ILogoDropdownProps {
  options: ITopic[];
  children?: ReactNode;
}

const LogoDropdown = ({ options }: ILogoDropdownProps) => {
  const [dropdown, setDropdown] = useState(false);
  const timer = useRef<any>(null);
  const CLOSE_DROPDOWN_DELAY = 600;

  const handleMouseEnter = (e: ReactMouseEvent) => {
    if (timer.current !== null) clearTimeout(timer.current);
    setDropdown(true);
  };
  const handleMouseLeave = (e: ReactMouseEvent) => {
    timer.current = setTimeout(() => {
      setDropdown(false);
      clearTimeout(timer.current);
    }, CLOSE_DROPDOWN_DELAY);
  };

  return (
    <div className={styles.LogoDropdown}>
      <NavLink
        to={"/"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${styles.logo} ${dropdown && styles.active}`}
      >
        <span>ЛАЙФХАКЕР</span>
        <img
          src={dropdown ? BlackBurger : WhiteBurger}
          className={styles.burger}
        />
      </NavLink>
      {dropdown && (
        <ul className={styles.dropdown}>
          {options.map(({ path, label }) => (
            <li
              className={styles.dropdownItem}
              key={path}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to={path} className={styles.navLink}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogoDropdown;
