import React, {useContext, useState} from 'react';
import styles from './LoginUser.module.css'
import {Auth, IAuth} from "../../context/isAuth";
import {useNavigate} from "react-router-dom";
import Input from "../Input/Input";

const LoginUser = () => {
  const {setIsAuth} = useContext(Auth) as IAuth;
  const goToLogin = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const buttonHandler = () => {
    setIsAuth(true)
    localStorage.setItem("userIsAuthentication", "true")
    goToLogin("/");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <hr className={styles.line}/>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
        }}
        action="#"
        className={styles.form}>
        <Input type="text" value={username} setStateFunction={setUsername} sting={"Username"}/>
        <Input type="password" value={password} setStateFunction={setPassword} sting={"Password"}/>
        <button type="submit" onClick={buttonHandler}>Login</button>
      </form>
    </div>
  );
};

export default LoginUser;