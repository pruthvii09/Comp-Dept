import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Styles/pages/404/404.module.css';

const index = () => {
  return (
    <div className={styles.container}>
      <h2>404 error</h2>
      <p>You have found the page that doesn't exist!</p>
      <Link to="/">Back to website</Link>
    </div>
  );
};

export default index;
