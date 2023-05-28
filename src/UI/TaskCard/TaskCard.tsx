import React from 'react';
import styles from './TaskCard.module.css';
import CardCategories from "../../components/CardCategories/CardCategories";
import Responsible from "../Responsible/Responsible";
import {IList} from "../../types/interfaces";

interface ITaskCard {
  object: IList,
}

const TaskCard:React.FC<ITaskCard> = ({object}) => {
  return (
    <div className={styles.card}
         draggable={true}>
      <div>
        <CardCategories array={object.categories}/>
        <h2 className={styles.title}>{object.title}</h2>
        <p className={styles.text}>{object.description}</p>
        <hr className={styles.line}/>
        {
          object.responsible.map((element)=> {
            return <Responsible key={element.avatar} object={element}/>
          })
        }
      </div>
    </div>
  );
};

export default TaskCard;