import styles from "./styles.module.scss";
import { ILink } from "../../types";

interface IProps {
  label: string;
  links: ILink[];
  openNewPage?: boolean;
}

const LinksRow = ({ label, links, openNewPage = true }: IProps) => {
  return (
    <ul className={styles.LinkRow}>
      <li className={styles.title}>{label}</li>
      {links.map(({ label, path }) => {
        return (
          <li key={path} className={styles.item}>
            <a href={path} target={openNewPage ? "_blank" : "_self"}>
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default LinksRow;
