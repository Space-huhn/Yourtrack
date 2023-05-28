import React, {Dispatch, SetStateAction} from 'react';
import styles from './UserList.module.css'
import {ITask} from "../../types/interfaces";

interface IUserList {
  state: ITask,
  setStateFunction: Dispatch<SetStateAction<ITask>>
}

const UserList:React.FC<IUserList> = ({state, setStateFunction}) => {
  const removeHandler = (element) => {
    setStateFunction(prev => ({...prev, responsible: state.responsible.filter(item => item !== element)}))
  }

  return (
    <div>
      <div className={styles.responsibleContainer}>
        {state.responsible.map((item) => {
          return (
            <div key={item.name} className={styles.responsible}>
              <img src={item.avatar} className={styles.avatar} alt="ALT"/>

              <span className={styles.name}>{item.name}</span>
              <button onClick={() => removeHandler(item)} className={styles.deleteResponsible}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                </svg>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default UserList;