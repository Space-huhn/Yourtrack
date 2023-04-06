import React, {useState} from 'react';
import styles from './Input.module.css'

const Input = ({sting, type}) => {
const [placeholder, setPlaceholder] = useState<string>(sting)

  const inputFocus = () => {
    setPlaceholder("")
  }

  const inputBlur = () => {
    setPlaceholder(sting)
  }

  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onFocus={inputFocus}
      onBlur={inputBlur}/>
  );
};

export default Input;