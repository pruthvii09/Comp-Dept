import React from 'react';
import styles from '../Styles/components/Dialog.module.css';

const Dialog = ({ openDialog, setOpenDialog, title, children }) => {
  return (
    <div
      className={
        openDialog ? `${styles.dialog} ${styles.opened}` : styles.dialog
      }
    >
      <div className={styles.dialogContent}>
        <div className={styles.dialogHeader}>
          <i
            className="uil uil-times-circle"
            onClick={() => setOpenDialog(!openDialog)}
          ></i>
          <h4>{title}</h4>
        </div>

        <div className={styles.contentWrapper}>{children}</div>
      </div>

      <div
        className={styles.dialogMask}
        onClick={() => setOpenDialog(!openDialog)}
      ></div>
    </div>
  );
};

export default Dialog;
