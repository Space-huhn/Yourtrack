import React, {Dispatch, SetStateAction} from 'react';
import styles from './Select.module.css'
import {ITask} from "../../types/interfaces";
import useFetch from "../../hooks/useFetch";

interface ISelectResponsible {
  state: ITask,
  setStateFunction: Dispatch<SetStateAction<ITask>>
}

const SelectResponsible: React.FC<ISelectResponsible> = ({state, setStateFunction}) => {
  const [responsible] = useFetch(`http://localhost:3004/responsibleList`);

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as  HTMLSelectElement;

    const elementExist = state.responsible.filter(element => {
      return element.name === target.value;
    });

    if (elementExist.length) return;

    const object = responsible.filter(element => {
      return element.name === target.value;
    });

    setStateFunction(prev => ({...prev, responsible: [...state.responsible, ...object]}))
  }

  return (
    <div>
      <label htmlFor='responsible'>responsible:</label>
      <select id='responsible'
              value='Select responsible'
              onChange={selectHandler}>
        <option disabled={true} value='Select responsible'>Select responsible</option>
        {responsible?.map((object) => {
          return (
            <option key={object.name} value={`${object.name}`}>{object.name}</option>
          )
        })}
      </select>
    </div>
  );
};

export default SelectResponsible;