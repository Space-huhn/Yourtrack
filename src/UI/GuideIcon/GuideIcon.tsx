import React from 'react';
import styles from './GuideIcon.module.css'

const GuideIcon = ({setGuideVisible}: any) => {
  const buttonHandler = () => {
    setGuideVisible(prev => !prev)
  }

  return (
    <button className={styles.button}
      onClick={buttonHandler}>
      <svg height="44" viewBox="0 96 960 960" width="44">
        <path d="M120 816v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
      </svg>
    </button>
  );
};

export default GuideIcon;