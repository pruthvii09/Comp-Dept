import React from "react";
import styles from "../Styles/components/Snackbar.module.css";

const Snackbar = ({ openSnackbar, setOpenSnackbar, message, color }) => {
  const handleOpenCloseDialog = () => {
    setOpenSnackbar(!openSnackbar);
  };

  return (
    <>
      <div
        className={
          openSnackbar ? `${styles.dialog} ${styles.opened}` : styles.dialog
        }
      >
        <div className={styles.dialogContent}>
          <i className="fa-solid fa-xmark" onClick={handleOpenCloseDialog}></i>

          <p>{message}</p>

          <button
            onClick={handleOpenCloseDialog}
            style={{ backgroundColor: color }}
          >
            OK
          </button>
        </div>
        <div
          className={styles.dialogMask}
          onClick={handleOpenCloseDialog}
        ></div>
      </div>
    </>
  );
};

Snackbar.defaultProps = {
  color: "#800acf",
};

export default Snackbar;
