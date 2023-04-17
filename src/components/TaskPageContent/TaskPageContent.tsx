import React, {useState} from 'react';
import styles from './TaskPageContent.module.css';
import './categories.css'
import CreateTaskButton from "../../UI/CreateTaskButton/CreateTaskButton";
import CreateTask from "../CreateTask/CreateTask";
import CardsContainer from "../../UI/CardsContainer/CardsContainer";
import CalendarComponent from "../../UI/Calendar/Calendar";

const TaskPageContent = ({data, setData, searchValue}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <CreateTaskButton setModalVisible={setModalVisible}/>
      <CreateTask data={data} setData={setData} modalVisible={modalVisible} setModalVisible={setModalVisible}/>

      <div className={styles.cardsWrapper}>
        <CardsContainer data={data} setData={setData} searchValue={searchValue}/>
        <CalendarComponent/>
      </div>
    </div>
  );
};

export default TaskPageContent;