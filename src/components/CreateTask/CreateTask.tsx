import React, {useState} from 'react';
import styles from './CreateTask.module.css'
import CloseButton from "../../UI/CloseButton/CloceButton";
import CardCategories from "../CardCategories/CardCategories";
import Button from "../../UI/Button/Button";

const CreateTask = ({data, setData, modalVisible, setModalVisible}) => {
  const cl = [styles.container]
  if (modalVisible) {
    cl.push(styles.active)
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  const [categories, setCategories] = useState<string[]>([])
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>, setState) => {
    setState(prev => [...prev, e.target.value])
  }

  const selectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value)
  }

  const cancelTask = () => {
    setCategories([])
    setTitle('')
    setDescription('')
    setStatus('')
  }

  const createTask = () => {
    setData(prev => [...prev, {
      id: data.length+1,
      title: title,
      description: description,
      categories: categories,
      status: status,
      responsible: []
    }])
    cancelTask()
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState) => {
    setState(e.target.value)
  }

  return (
    <div onClick={closeModal} className={cl.join(' ')}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <CloseButton closeModal={closeModal}/>
        <label htmlFor="title">title</label>
        <input id='title' type="text"
           onChange={e => inputHandler(e, setTitle)}
           value={title}
        />

        <label htmlFor="description">description</label>
        <textarea id='description'
          onChange={e => inputHandler(e, setDescription)}
          value={description}
        />

        <label className={styles.categories} htmlFor="categories">
          categories:
        </label>
        <span><CardCategories array={categories}/></span>
        <select id='categories'
                onChange={(e) => selectHandler(e, setCategories)}>
          <option disabled={true}>Select categories</option>
          <option value='website'>website</option>
          <option value='design'>design</option>
          <option value='frontend'>frontend</option>
          <option value='management'>management</option>
          <option value='app'>app</option>
          <option value='planning'>planning</option>
        </select>

        <label htmlFor="status">status</label>
        <select id='status'
                onChange={selectStatus}>
          <option disabled={true}>Select status</option>
          <option value='inProgress'>In Progress</option>
          <option value='toDo'>To Do</option>
          <option value='completed'>Completed</option>
        </select>

        <div className={styles.bottom}>
          <Button click={cancelTask}>Cancel</Button>
          <Button click={createTask}>Save Task</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;