import React, {useContext, useState} from 'react';
import styles from './LoginUser.module.css'
import {Auth, IAuth} from "../../context/isAuth";
import {useNavigate} from "react-router-dom";
import Input from "../Input/Input";

const LoginUser = () => {
  const {setIsAuth} = useContext<any>(Auth);
  const goToLogin = useNavigate()


  const buttonHandler = () => {
    setIsAuth(true)

    goToLogin("/");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <hr className={styles.line}/>
      <form action="#" className={styles.form}>

        <Input type="text" sting={"Username"}/>
        <Input type="password" sting={"Password"}/>

        <button onClick={buttonHandler}>Login</button>
      </form>
    </div>
  );
};

export default LoginUser;