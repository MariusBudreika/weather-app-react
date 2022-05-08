import React, { useState } from "react";
import styles from "./Input.module.scss";

const Input = (props) => {
  const [query, setQuery] = useState("");

  const searchHandeler = () => {
    props.onSearch(query);
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.inputSearchBar}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={(e) => e.key === "Enter" && searchHandeler()}
      />
    </div>
  );
};

export default Input;
