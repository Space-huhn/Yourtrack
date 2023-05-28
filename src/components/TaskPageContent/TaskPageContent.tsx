import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './TaskPageContent.module.css';
import './categories.css'
import CreateTaskButton from "../../UI/CreateTaskButton/CreateTaskButton";
import CreateTask from "../CreateTask/CreateTask";
import CardsContainer from "../../UI/CardsContainer/CardsContainer";
import CalendarComponent from "../../UI/Calendar/Calendar";
import Loader from "../../UI/Loader/Loader";
import LoadingError from "../../UI/LoadingError/LoadingError";
import {bodyLock} from "../../functions/bodyLock";
import {ITodoListColumns} from "../../types/interfaces";

interface ITaskPageContent {
  data: ITodoListColumns,
  setData: Dispatch<SetStateAction<ITodoListColumns>>,
  searchValue: string,
  loading: boolean,
}

const TaskPageContent:React.FC<ITaskPageContent> = ({data, setData, searchValue, loading}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  if (!data) {
    return (
      <>
        {loading ?
          <Loader/>
          :
          <LoadingError/>
        }
      </>
    )
  }

  bodyLock(modalVisible)

  return (
    <div className={styles.main}>
      <CreateTaskButton setModalVisible={setModalVisible}/>
      <CreateTask data={data}
                  setData={setData}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}/>

      <div className={styles.cardsWrapper}>
        <CardsContainer data={data}
                        setData={setData}
                        searchValue={searchValue}/>
        <CalendarComponent/>
      </div>
    </div>
  );
};

export default TaskPageContent;