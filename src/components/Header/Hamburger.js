import * as React from 'react';
import * as styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
      <span className={`${styles.burgerSpan} ${isOpen ? styles.oppsiteColor : styles.trueColor}`}></span>
      <span className={`${styles.burgerSpan} ${isOpen ? styles.oppsiteColor : styles.trueColor}`}></span>
      <span className={`${styles.burgerSpan} ${isOpen ? styles.oppsiteColor : styles.trueColor}`}></span>
    </button>
  );
};

export default Hamburger;
