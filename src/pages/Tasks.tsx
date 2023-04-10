import React, {useEffect, useState} from 'react';
import {fetchData} from "../functions/fetchData";
import {ITask} from "../interfaces";
import styles from './Tasks.module.css';
import './categories.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {statusTypes} from "../static/static-data";
import TaskCard from "../UI/TaskCard/TaskCard";
import CardsContainer from "../UI/CardsContainer/CardsContainer";
import CreateTask from "../components/CreateTask/CreateTask";
import CreateTaskButton from "../UI/CreateTaskButton/CreateTaskButton";

const Tasks = () => {
  const [data, setData] = useState<ITask[]>( []);
  const [modalVisible, setModalVisible] = useState(false)


  const [searchValue, setSearchValue] = useState<string>("")

  useEffect(() => {
    fetchData(`http://localhost:3004/todoList`, setData).then()
  }, [])

  const clickHandler = (event, element, status) => {
    const target = event.target as HTMLDivElement;
    if (target.closest(".cardsContainer")) {
      console.log("ok")
    }
    setData([...data, element.status = status])
  }

  const changeStatus = (event, element, status) => {
    const target = event.target as HTMLDivElement;
    if (target.closest(".cardsContainer")) {
      console.log("ok")
    }
    setData([...data, element.status = status])
  }


  return (
    <div className={styles.pageContent}>
      <Header setSearchValue={setSearchValue}/>

      <div className={styles.main}>
        <CreateTaskButton setModalVisible={setModalVisible}/>
        <CreateTask modalVisible={modalVisible} setModalVisible={setModalVisible}/>

        <div className={styles.cardsWrapper}>
          {
            statusTypes.map(element => {
              return (
                <CardsContainer key={element.status} object={element}>

                  <div key={element.status} className={element.status}>{
                    data.map(object => {
                      if (object.status === element.status) {
                        return <TaskCard key={object.id} clickHandler={clickHandler} changeStatus={changeStatus} object={object}/>
                      }
                    })
                  }</div>

                </CardsContainer>
              )
            })
          }
        </div>



        {/*<TaskCard object={data[0]}/>*/}
        {/*<TaskCard object={data[1]}/>*/}
        {/*<TaskCard object={data[2]}/>*/}
        {/*<TaskCard object={data[3]}/>*/}




      </div>

      <Footer/>

    </div>
  );
};

export default Tasks;