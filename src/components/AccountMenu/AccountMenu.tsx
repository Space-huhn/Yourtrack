import React, {useContext, useState} from 'react';
import avatar from "../../image/avatar.gif"
import styles from './AccountMenu.module.css'
import {accountMenuItems} from "../../static/static-data";
import {Auth} from "../../context/isAuth";

const AccountMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const {setIsAuth} = useContext<any>(Auth)

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem("userIsAuthentication")
  }

  const handleClick = () => {
    setIsActive(current => !current);
  };

  const cl = [styles.navigation]

  if (isActive) {
    cl.push(styles.active)
  }

  const closeMenu = (event) => {
    const target = event.target as HTMLDivElement;

    if (!target.closest(`.${styles.accountMenu}`)) {
      setIsActive(false);
      document.removeEventListener("click", closeMenu, false)
    }
  }

  if (isActive) {
    document.addEventListener("click", closeMenu, false)
  }

  return (
    <div className={styles.accountMenu} >
      <img className={styles.image} src={avatar} alt="ALT" onClick={handleClick}/>
      <nav className={cl.join(" ")}>
        {accountMenuItems.map(element => {
          return <p key={element} className={styles.navigationItem}>{element}</p>
        })}
        <p className={styles.navigationItem}
          onClick={logOut}
        >sing out</p>
      </nav>
    </div>
  );
};

export default AccountMenu;