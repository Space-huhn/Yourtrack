import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './CreateTask.module.css'
import CloseButton from "../../UI/CloseButton/CloceButton";
import Button from "../../UI/Button/Button";
import {putData} from "../../functions/putData";
import {ITask, ITodoListColumns} from "../../types/interfaces";
import TextArea from "../../UI/TextArea/TextArea";
import CategoryList from "../CategoryList/CategoryList";
import Select from "../../UI/Select/Select";
import UserList from "../UserList/UserList";
import InputModal from "../../UI/InputModal/InputModal";
import SelectResponsible from "../../UI/SelectResponsible/SelectResponsible";
import {categoriesList, statusList} from '../../static/static-data'

interface ICreateTask {
  data: ITodoListColumns,
  setData: Dispatch<SetStateAction<ITodoListColumns>>,
  modalVisible: boolean,
  setModalVisible: (modalVisible: boolean) => void
}

const CreateTask:React.FC<ICreateTask> = ({data, setData, modalVisible, setModalVisible}) => {
  const nextId = new Date().getTime()

  const taskForm: ITask = {
    id: nextId,
    title: '',
    description: '',
    categories: [],
    status: '',
    responsible: []
  }

  const [newTask, setNewTask] = useState(JSON.parse(JSON.stringify(taskForm)))

  const cancelTask = () => {
    setNewTask(taskForm)
  }

  const createTask = () => {
    const obj = JSON.parse(JSON.stringify(data[newTask.status].items.push(newTask)))

    setData(prev => ({
      ...prev,
      str: {...obj}
    }));

    putData(`http://localhost:3004/todoListColumns`, data).then();

    cancelTask()
  }

  const closeModal = () => {
    cancelTask();
    setModalVisible(false);
  }

  return (
    <div onClick={closeModal}
         className={`${styles.container} 
         ${modalVisible ? styles.active : ''}`}
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <CloseButton
          closeModal={closeModal}/>
        <InputModal
          value={newTask}
          setStateFunction={setNewTask}/>
        <TextArea
          labelText='description:'
          value={newTask}
          setStateFunction={setNewTask}/>
        <CategoryList
          newTask={newTask}
          setNewTask={setNewTask}/>
        <Select
          labelText='categories'
          options={categoriesList}
          defaultValue='Select categories'
          state={newTask}
          setStateFunction={setNewTask}/>
        <Select
          labelText='status'
          options={Object.values(statusList)}
          state={newTask}
          setStateFunction={setNewTask}/>
        <div className={styles.responsible}>
          <UserList
            state={newTask}
            setStateFunction={setNewTask}/>
          <SelectResponsible
            state={newTask}
            setStateFunction={setNewTask}/>
        </div>
        <div className={styles.bottom}>
          <Button click={cancelTask}>Cancel</Button>
          <Button click={createTask}>Save Task</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;