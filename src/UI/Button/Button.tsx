import React from 'react';
import styles from './Button.module.css'

const Button = ({click, children}) => {
  return (
    <button onClick={click} className={styles.button} >
      {children}
    </button>
  );
};

export default Button;