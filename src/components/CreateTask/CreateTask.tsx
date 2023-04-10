import React from 'react';
import styles from './CreateTask.module.css'

const CreateTask = ({modalVisible, setModalVisible}) => {
  const cl = [styles.container]
  if (modalVisible) {
    cl.push(styles.active)
  }

  const closeModal = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    setModalVisible(false);
  }

  return (
    <div onClick={closeModal} className={cl.join(' ')}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
          <button onClick={closeModal} className={styles.closeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          </button>
        <label htmlFor="title">title</label>
        <input id='title' type="text"/>
        <label htmlFor="description">description</label>
        <textarea id='description'/>
        <label htmlFor="categories">description</label>
        <select id='categories'>
          <option>website</option>
          <option>design</option>
          <option>frontend</option>
          <option>management</option>
          <option>app</option>
          <option>planning</option>
        </select>

      </div>
    </div>
  );
};

export default CreateTask;