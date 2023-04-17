import React, {useState} from 'react';
import styles from './TaskCard.module.css';
import CardCategories from "../../components/CardCategories/CardCategories";
import Responsible from "../Responsible/Responsible";

const TaskCard = ({object}) => {
  return (
    <div className={styles.card}>
      <div>
        <CardCategories array={object.categories}/>
        <h2 className={styles.title}>{object.title}</h2>
        <p className={styles.text}>{object.description}</p>
        <hr className={styles.line}/>
        {
          object.responsible.map((element, index)=> {
            return <Responsible key={index} object={element}/>
          })
        }
      </div>
    </div>
  );
};

export default TaskCard;