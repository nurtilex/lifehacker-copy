import React from "react";
import styles from "./styles.module.scss";

const Copyright = React.memo(function () {
  return (
    <section className={styles.Copyright}>
      <div className={styles.adults}>18 +</div>
      <span className={styles.text}>
        Копирование материалов запрещено. Издание может получать комиссию от
        покупки товаров, представленных в публикациях
      </span>
    </section>
  );
});

export default Copyright;
