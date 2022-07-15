import { IProps } from "../../types";
import Header from "../Header";
import Footer from "../Footer/Footer";
import styles from "./styles.module.scss";

const Layout = ({ children }: IProps) => {
  return (
    <section className={styles.Layout}>
      <Header />
      <section className={styles.content}>{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
