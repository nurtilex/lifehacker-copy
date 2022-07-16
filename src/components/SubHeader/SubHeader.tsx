import styles from "./styles.module.scss";
import { ILink } from "../../types";
import { NavLink } from "react-router-dom";

interface IProps {
  items: ILink[];
}

const SubHeader = ({ items }: IProps) => {
  return (
    <ul className={styles.SubHeader}>
      {items.map(({ label, path }) => (
        <li key={path} className={styles.item}>
          {path.includes("https:") ? (
            <a href={path}>{label}</a>
          ) : (
            <NavLink to={path}>{label}</NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubHeader;
