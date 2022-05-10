import React from "react";
import styles from "./Card.module.scss";
import cx from "classnames";

const Card = (props) => {
  return (
    <div className={cx(styles.card, styles.cardColdBg)}>
      <div className={styles.cardGradient}>{props.children}</div>
    </div>
  );
};

export default Card;
