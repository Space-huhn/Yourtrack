import React, {useState} from 'react';
import styles from './Input.module.css'

interface IInput {
  labelText?: string
  sting: string,
  type: string,
  value: string,
  setStateFunction?: (value: string) => void
}

const Input:React.FC<IInput> = ({labelText, sting, type, value,  setStateFunction}) => {

const [placeholder, setPlaceholder] = useState<string>(sting)

  const inputFocus = () => {
    setPlaceholder("")
  }

  const inputBlur = () => {
    setPlaceholder(sting)
  }

   const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setStateFunction!(target.value)
  }

  return (
    <>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        itemID={labelText}
        className={styles.input}
        value={value}
        type={type}
        placeholder={placeholder}
        onInput={inputHandler}
        onFocus={inputFocus}
        onBlur={inputBlur}/>
    </>
  );
};

export default Input;