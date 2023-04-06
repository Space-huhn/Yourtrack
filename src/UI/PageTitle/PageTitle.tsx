import React from 'react';
import styles from "./PageTitle.module.css";

const PageTitle = (props) => {
  return (
    <h3 className={styles.pageName}>
      {props.children}
    </h3>
  );
};

export default PageTitle;