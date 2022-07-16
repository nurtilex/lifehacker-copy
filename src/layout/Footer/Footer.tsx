import styles from "./styles.module.scss";
import {
  PROJECT_INFORMATION_LINKS,
  RULES,
  SUBSCRIPTIONS,
} from "../../constants";
import { useMemo } from "react";
import LinksRow from "../../components/LinksRow";
import Copyright from "../../components/Copyright";

const Footer = () => {
  const { projects, rules, subscriptions } = useMemo(
    () => ({
      projects: PROJECT_INFORMATION_LINKS,
      subscriptions: SUBSCRIPTIONS,
      rules: RULES,
    }),
    []
  );

  return (
    <footer className={styles.Footer}>
      <section className={styles.links}>
        <LinksRow label={"Информация"} links={projects} />
        <LinksRow label={"Подписки"} links={subscriptions} />
        <LinksRow label={"Правила"} links={rules} />
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
