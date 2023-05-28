import React, {Dispatch, SetStateAction} from 'react';
import styles from './InputModal.module.css'
import {ITask} from "../../types/interfaces";

interface IInput {
  value: ITask,
  setStateFunction?: Dispatch<SetStateAction<ITask>>
}

const InputModal:React.FC<IInput> = ({value,  setStateFunction}) => {

   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setStateFunction!(prev => ({...prev, title: target.value}))
  }

  return (
    <>
      <label htmlFor='title'>title</label>
      <input
        itemID='title'
        className={styles.input}
        value={value.title}
        type='text'
        onInput={inputHandler}
      />
    </>
  );
};

export default InputModal