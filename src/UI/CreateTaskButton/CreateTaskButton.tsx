import React from 'react';
import styles from './CreateTaskButton.module.css'

const CreateTaskButton = ({setModalVisible}) => {
  const openModal = () => {
    setModalVisible(true)
  }

  return (
    <div onClick={openModal} className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
        <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/>
      </svg>
    </div>
  );
};

export default CreateTaskButton;