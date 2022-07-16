import styles from "./styles.module.scss";
import SearchIcon from "../../assets/search-icon.svg";
import NotificationIcon from "../../assets/notification-icon.svg";
import UserIcon from "../../assets/user-icon.svg";
import React, { useMemo } from "react";

interface IControl {
  src: string;
  className: string;
  alt: string;
  onClick: (e: React.MouseEvent) => void;
}

const NavControls = () => {
  const controls: IControl[] = [
    {
      src: SearchIcon,
      className: styles.iconSmall,
      alt: "search",
      onClick: () => {},
    },
    {
      src: NotificationIcon,
      className: styles.icon,
      alt: "notification",
      onClick: () => {},
    },
    {
      src: UserIcon,
      className: styles.icon,
      alt: "user",
      onClick: () => {},
    },
  ];
  return (
    <ul className={styles.NavControls}>
      {controls.map(({ src, className, onClick, alt }) => {
        return (
          <li key={alt} className={styles.item}>
            <img alt={alt} src={src} className={className} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavControls;
