import React, {useEffect, useState} from 'react';
import {fetchData} from "../functions/fetchData";
import {ITask} from "../interfaces";
import styles from './Tasks.module.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../UI/Loader/Loader";
import LoadingError from "../UI/LoadingError/LoadingError";
import TaskPageContent from "../components/TaskPageContent/TaskPageContent";

const Tasks = () => {
  const [data, setData] = useState<ITask[]>( []);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [searchValue, setSearchValue] = useState<string>("")

  useEffect(() => {
    fetchData(`http://localhost:3004/todoList`, setData).then()

    if (data.length) {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }
  }, [isLoading])

  if (!data.length) {
    return (
      <>
        {isLoading ?
          <div className={styles.pageContent}>
            <Header setSearchValue={setSearchValue}/>
              <Loader/>
            <Footer/>
          </div>
           :
          <div className={styles.pageContent}>
            <Header setSearchValue={setSearchValue}/>
            <LoadingError/>
            <Footer/>
          </div>
        }
      </>
    )
  }

  return (
    <div className={styles.pageContent}>
      <Header setSearchValue={setSearchValue}/>
        <TaskPageContent data={data}
                         setData={setData}
                         searchValue={searchValue}
        />

      <Footer/>
    </div>
  );
};

export default Tasks;