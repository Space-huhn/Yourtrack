import React, {Dispatch, SetStateAction} from 'react';
import styles from './Select.module.css'
import {ITask} from "../../types/interfaces";
import {getObjectKey} from "../../functions/getObjectKey";
import {statusList} from "../../static/static-data";

interface ISetStateString {
  setStateFunction: (value: string) => void
  // setStateFunction: Dispatch<SetStateAction<string>>

}

interface ISetStateArray {
  setStateFunction: (value: string[]) => void
  // setStateFunction: Dispatch<SetStateAction<string[]>>
}

interface ISelect {
  labelText?: string,
  options: string[],
  defaultValue?: string,
  state: string | ITask,
  setStateFunction: any
}

const Select: React.FC<ISelect> = ({labelText, options, defaultValue, state, setStateFunction}) => {

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as  HTMLSelectElement;

    const str:string = `${labelText}`

    console.log(str)

    if (typeof state[str] === "string") {
      console.log(getObjectKey(statusList, target.value))
      setStateFunction(prev => ({...prev, [`${labelText}`]: getObjectKey(statusList, target.value)}))
    } else {
      if (state[`${labelText}`].includes(target.value)) return;

      setStateFunction(prev => ({
        ...prev,
        labelText: state[`${labelText}`].push(target.value)
      }))
    }
  }

  return (
    <div>
      {labelText ? (<label htmlFor={defaultValue}>{labelText}:</label>) : (<div/>)}
      <select id={defaultValue}
              value={defaultValue}
              onChange={selectHandler}>
        {defaultValue ? <option disabled={true} value={defaultValue}>{defaultValue}</option> : null}

        {options.map((option) => {
          return (
            <option key={option} value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  );
};

export default Select;