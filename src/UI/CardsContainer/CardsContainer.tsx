import React from 'react';
import styles from './CardsContainer.module.css'

const CardsContainer = ({object, children}) => {
  const cl = [object.status, 'cardsContainer']
  return (
    <div className={cl.join(' ')}>
      <h2 className={styles.title}>{object.name}</h2>
      {children}
    </div>
  );
};

export default CardsContainer;