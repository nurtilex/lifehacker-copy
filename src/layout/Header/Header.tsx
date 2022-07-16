import { useMemo } from "react";
import LogoDropdown from "../../components/LogoDropdown";
import NavBar from "../../components/NavBar";
import NavControls from "../../components/NavControls";
import { NAVBAR_ITEMS, TOPICS } from "../../constants";
import styles from "./styles.module.scss";

const Header = () => {
  const { topics, navbarItems } = useMemo(
    () => ({
      topics: TOPICS,
      navbarItems: NAVBAR_ITEMS,
    }),
    []
  );
  return (
    <header className={styles.Header}>
      <LogoDropdown options={topics} />
      <NavBar options={navbarItems} />
      <NavControls />
    </header>
  );
};

export default Header;
