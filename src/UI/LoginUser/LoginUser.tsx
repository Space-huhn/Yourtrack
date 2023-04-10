import React, {useContext} from 'react';
import styles from './LoginUser.module.css'
import {Auth} from "../../context/isAuth";
import {useNavigate} from "react-router-dom";
import Input from "../Input/Input";

const LoginUser = () => {
  const {setIsAuth} = useContext<any>(Auth);
  const goToLogin = useNavigate()


  const buttonHandler = () => {
    setIsAuth(true)

    goToLogin("/");
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <hr className={styles.line}/>
      <form onSubmit={handleSubmit}
        action="#"
        className={styles.form}>
        <Input type="text" sting={"Username"}/>
        <Input type="password" sting={"Password"}/>
        <button type="submit" onClick={buttonHandler}>Login</button>
      </form>
    </div>
  );
};

export default LoginUser;