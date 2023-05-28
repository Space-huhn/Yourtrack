import React, {Dispatch, SetStateAction} from 'react';
import styles from './CategoryList.module.css';
import {ITask} from "../../types/interfaces";

interface ICategoryList {
  newTask: ITask,
  setNewTask: Dispatch<SetStateAction<ITask>>
}

const CategoryList:React.FC<ICategoryList> = ({newTask, setNewTask}) => {

  const removeCategory = (element) => {
    setNewTask(prev => ({...prev,
      categories: newTask.categories.filter(category => category !== element)}))
  }

  return (
    <div style={{display: 'inline-block'}}>
      {/*<label className={styles.categories} htmlFor="categories">*/}
      {/*  categories:*/}
      {/*</label>*/}
      <div className={styles.categoriesContainer}>
        {newTask.categories.map((category) => {
          return(
            <span key={`${category}-modal`} className={styles.category}>
              <span className={category} >{category}</span>
              <button onClick={() => removeCategory(category)} className={styles.deleteCategories}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                </svg>
              </button>
            </span>
          )
        })}
      </div>
    </div>
  );
};

export default CategoryList;