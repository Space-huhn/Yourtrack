import React from 'react';
import styles from './CloseButton.module.css';

const CloseButton = ({closeModal}) => {
  return (
    <button onClick={closeModal} className={styles.closeButton}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
      </svg>
    </button>
  );
};

export default CloseButton;