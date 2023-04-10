import React from 'react';
import styles from './CardCategories.module.css';

const CardCategories = ({object}) => {
  return (
    <div className={styles.categories}>{
      object.categories.map(element => {
        return <span className={element} key={element}>{element}</span>
      })
    }</div>
  );
};

export default CardCategories;