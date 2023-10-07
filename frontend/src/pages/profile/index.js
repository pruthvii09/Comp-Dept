import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "../../Styles/pages/profile/Profile.module.css";
import Dialog from "../../Components/Dialog";

const Index = () => {
  const { user, userData, dispatch } = useUserContext();

  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:4000/api/users/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USER_DATA", payload: json });
      }
    };

    if (user) {
      fetchData();
    }
  }, []);

  return (
    <div className={styles.container}>
      {userData ? (
        <div className={styles.profile_container}>
          <h3>
            Welcome <br /> <span>{userData?.name}</span>
          </h3>
          <p>Thank you for the registration!</p>

          <div className={styles.horizontal_row}></div>

          <div className={styles.information}>
            <h4>Personal Information</h4>
            <p>
              Email: <span>{userData?.email}</span>
            </p>
            <p>
              Contact Number: <span>{userData?.contact}</span>
            </p>
            <p>
              ERP_ID: <span>{userData?.erp_id}</span>
            </p>
            <p>
              Year: <span>{userData?.year}</span>
            </p>
          </div>

          <div className={styles.horizontal_row}></div>
          <div>
            <h5>Navigate to</h5>
            <button onClick={() => navigate("/quiz/survey")}>
              Mid Term Servry
            </button>
            <button onClick={() => setOpenDialog(true)}>
              Certificate Request
            </button>
            <button>Exam Form</button>
            <button>Fees Status</button>
          </div>
          <div className={styles.horizontal_row}></div>

          <p className={styles.contact_line}>
            If any query feel free to contact us
            <Link to="/contact">Click here!</Link>
          </p>
        </div>
      ) : (
        <div className={styles.profile_container}>
          <h3>Loading....</h3>
        </div>
      )}
      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Request Certificate"}
        children={
          <div>
            <p style={{ marginBottom: "20px" }}>Fill The Following Form</p>
            <div className={styles.field}>
              <b>Name *</b>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className={styles.field}>
              <b>Month *</b>
              <input type="text" placeholder="Enter Month" />
            </div>
            <div className={styles.field}>
              <b>Year *</b>
              <input type="text" placeholder="Enter Year" />
            </div>
            <div className={styles.field}>
              <b>PRN No. *</b>
              <input type="text" placeholder="Enter your PRN No." />
            </div>
            <button className={styles.button}>
              <Link to="/profile" style={{ color: "white" }}>
                Submit
              </Link>
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Index;
