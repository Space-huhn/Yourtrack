import React, {Dispatch, SetStateAction} from 'react';
import styles from './TextArea.module.css'
import {ITask} from "../../types/interfaces";

interface ITextArea {
  labelText: string,
  value: ITask,
  setStateFunction: Dispatch<SetStateAction<ITask>>
}

const TextArea: React.FC<ITextArea> = ({labelText, value,  setStateFunction}) => {

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLTextAreaElement;
    setStateFunction(prev => ({...prev, description: target.value}));
  }

  return (
    <div  className={styles.textArea}>
      <label htmlFor={labelText}>{labelText}</label>
      <textarea id={labelText}
                onChange={inputHandler}
                value={value.description}
      />
    </div>
  );
};

export default TextArea;