import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>2023 All rights reserved @&%%%</span>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}><span>about</span></a>
        <a href="#" className={styles.link}><span>support</span></a>
        <a href="#" className={styles.link}><span>purchase</span></a>
      </nav>
    </footer>
  );
};

export default Footer;