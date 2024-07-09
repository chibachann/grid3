import * as React from 'react';
import * as styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
      <span className={styles.burgerSpan }></span>
      <span className={styles.burgerSpan }></span>
    </button>
  );
};

export default Hamburger;
