import React, {useEffect, useState} from 'react';
import {fetchData} from "../functions/fetchData";
import {ITask} from "../interfaces";
import styles from './Tasks.module.css';
import './categories.css'
import Header from "../components/Header/Header";

const Tasks = () => {
  const [data, setData] = useState<ITask[]>( []);
  const [searchValue, setSearchValue] = useState<string>("")

  useEffect(() => {
    fetchData(`http://localhost:3004/todoList`, setData).then()
  }, [])

  return (
    <div className={styles.pageContent}>
      <Header setSearchValue={setSearchValue}/>
      <div className={styles.main}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at.
      </div>
      <div className={styles.footer}>Lorem ipsum dolor sit amet.</div>


      {/*
      <div className={styles.card}>
        <div className={styles.categories}>{
          data[0]?.categories.map(element => {
            return <span className={element} key={element}>{element}</span>
          })
        }</div>
        <h2 className={styles.title}>{data[0]?.title}</h2>
        <p className={styles.text}>{data[0]?.description}</p>
        <hr className={styles.line}/>
        <div className={styles.responsible}>{
          data[0]?.responsible.map((element, index)=> {
            return (

              <div key={index} className={styles.window}>

                <img style={{width: '50px', borderRadius: '50px'}} src={element.avatar} alt="Alt"/>

                <div className={styles.info}>
                  <h3>{element.name}</h3>
                  <p>{element.position}</p>
                </div>

              </div>

            )
          })
        }</div>

      </div>
*/}
    </div>
  );
};

export default Tasks;