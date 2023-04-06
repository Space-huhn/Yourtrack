import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./NavigationLink.module.css";
import {ILink} from "../../interfaces";

const NavigationLink = ({guideVisible, object}: ILink) => {
  const cl: string[] = [styles.menuItem];

  if (guideVisible) {
    cl.push(styles.textVisible)
  }

  return (
    <NavLink
      to={object.path}
      className={cl.join(" ")}>
      <span className={`icon-${object.name}`}/>
      {object.name}
    </NavLink>
  );
};

export default NavigationLink;