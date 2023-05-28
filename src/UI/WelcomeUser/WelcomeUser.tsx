import React from 'react';
import {useNavigate} from "react-router-dom";
import img from '../../image/task-management-hero.png'
import styles from './WelcomeUser.module.css'

const WelcomeUser = () => {
  const goToLogin = useNavigate()

  const redirectHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    goToLogin("/login");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Welcome to <span>YouTrack</span>, the best tasks manager</h1>
      <img className={styles.image} src={img} alt="ALT"/>
      <a href={"/login"}
         className={styles.link}
         onClick={redirectHandler}>
          Login
        <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 96 960 960" width="34">
          <path d="M489 936v-60h291V276H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366 444l43-43 176 176-174 174Z"/>
        </svg>
      </a>
    </div>
  );
};

export default WelcomeUser;