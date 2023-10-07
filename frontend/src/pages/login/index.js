import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dialog from "../../Components/Dialog";
import Header from "../../Components/Header";
import Spinner from "../../Components/Spinner";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "../../Styles/pages/signup/Signup.module.css";

const Index = () => {
  const { dispatch } = useUserContext();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [disableSignup, setDisableSignup] = useState(false);

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSignIn = async () => {
    // console.log(`/api/users/login`);

    setDisableSignup(true);
    setShowError(false);
    setError("");
    setEmptyFields([]);

    if (data?.email?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, "email"]);
      setError("Please enter email!");
      setShowError(true);
    } else if (data?.password?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, "password"]);
      setError("Please enter password!");
      setShowError(true);
    } else {
      const response = await fetch(`http://localhost:4000/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        setData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          dispatch({ type: "LOGIN", payload: json });
        }, 2000);
        setOpenDialog(true);
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
    setDisableSignup(false);
  };
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1>Login</h1>
        <p>Welcome to Computer Depratment PESMCOE Register to To Your ERP</p>
      </Header>

      <div className={styles.container}>
        <div className={styles.left_container}>
          <img src="/images/home/home-hero.svg" alt="" />
        </div>
        <div className={styles.form} style={{ marginTop: "90px" }}>
          <div>
            <div className={styles.field}>
              <b>Email *</b>
              <input
                type="email"
                placeholder="Enter your email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className={
                  emptyFields?.includes("email") ? styles.error_field : ""
                }
              />
            </div>
            <div className={`${styles.field} ${styles.password_field}`}>
              <b>Password *</b>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={data?.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className={
                  emptyFields?.includes("email") ? styles.error_field : ""
                }
              />
              {showPassword ? (
                <i
                  className="uil uil-eye-slash"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              ) : (
                <i
                  className="uil uil-eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              )}
            </div>
          </div>
          {showError && (
            <div className={styles.error}>
              {error}
              <i
                className="uil uil-times-circle"
                onClick={() => setShowError(!showError)}
              ></i>
            </div>
          )}
          <button
            onClick={handleSignIn}
            disabled={disableSignup}
            className={disableSignup ? styles.disabled : ""}
          >
            {disableSignup ? (
              <>
                {" "}
                Loading <Spinner />
              </>
            ) : (
              "Login"
            )}
          </button>
          <p>
            Don't have and account? <Link to="/signup"> Click here!</Link>
          </p>
          <p style={{ marginTop: "5px" }}>
            Forgot your password? <Link to="/forgot"> Click here!</Link>
          </p>
        </div>
      </div>

      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Login Successful!"}
        children={
          <div>
            <p>You are logged in to Android Compose Camp 2022 event!</p>
            <button className={styles.button}>
              <Link to="/profile" style={{ color: "white" }}>
                Profile
              </Link>
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Index;
