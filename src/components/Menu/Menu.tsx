import React, {useState} from 'react';
import styles from './Menu.module.css';
import '../../styles/iconsfont.css';
import './active-link.css';
import {menuItems} from "../../static/static-data";
import NavigationLink from "../../UI/NavigationLink/NavigationLink";
import {IMenuItems} from "../../types/interfaces";
import GuideIcon from "../../UI/GuideIcon/GuideIcon";

const Menu = () => {
  const [guideVisible, setGuideVisible] = useState<boolean>(false)



  return (
    <div className={styles.menuContainer}>
      <GuideIcon setGuideVisible={setGuideVisible}/>

      <nav className={styles.menu}>
        {menuItems.map((item: IMenuItems) => (
          <NavigationLink key={item.name} object={item} guideVisible={guideVisible}/>
        ))}
      </nav>
    </div>
  );
};

export default Menu;