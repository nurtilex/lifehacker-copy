import { IProps } from "../../types";
import Header from "../Header";
import Footer from "../Footer/Footer";
import styles from "./styles.module.scss";
import { useMemo } from "react";
import { SUB_HEADER_ITEMS } from "../../constants";
import SubHeader from "../../components/SubHeader";

const Layout = ({ children }: IProps) => {
  const { subHeaderItems } = useMemo(
    () => ({
      subHeaderItems: SUB_HEADER_ITEMS,
    }),
    []
  );
  return (
    <section className={styles.Layout}>
      <Header />
      <SubHeader items={subHeaderItems} />
      <section className={styles.content}>{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
