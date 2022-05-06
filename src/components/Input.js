import React from "react";
import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputSearchBar}
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
