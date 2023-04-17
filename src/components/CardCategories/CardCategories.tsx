import React from 'react';
import styles from './CardCategories.module.css';

const CardCategories = ({array}) => {
  return (
    <div className={styles.categories}>{
      array.map(element => {
        return <span className={element} key={element}>{element}</span>
      })
    }</div>
  );
};

export default CardCategories;