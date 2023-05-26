import React from 'react';
import styles from '../Styles/components/Header.module.css';

const Header = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export default Header;
