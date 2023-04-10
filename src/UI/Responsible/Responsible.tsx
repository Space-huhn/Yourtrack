import React from 'react';
import styles from './Responsible.module.css';

const Responsible = ({object}) => {
  return (
    <div className={styles.window}>
      <img className={styles.image}
           src={object.avatar}
           alt="Alt"/>
      <div className={styles.info}>
        <h3>{object.name}</h3>
        <p>{object.position}</p>
      </div>
    </div>
  );
};

export default Responsible;