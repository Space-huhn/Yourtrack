import React from 'react';
import styles from './Header.module.css'
import {menuItems} from "../../static/static-data";
import {returnNameByValue} from "../../functions/returnNameByValue";
import Search from "../../UI/Search/Search";
import PageTitle from "../../UI/PageTitle/PageTitle";
import AccountMenu from "../AccountMenu/AccountMenu";

const Header = ({ setSearchValue }) => {
  return (
    <div className={styles.header}>
      <PageTitle>{returnNameByValue(menuItems, window.location.pathname)}</PageTitle>
      <Search setSearchValue={setSearchValue}/>
      <AccountMenu/>
    </div>
  );
};

export default Header;