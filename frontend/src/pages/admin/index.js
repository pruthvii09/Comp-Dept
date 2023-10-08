import React, { useState } from "react";
import styles from "../../Styles/pages/admin/AdminPage.module.css";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleAdmin = () => {
    console.log("hello");
    setError("");
    setShowError(false);
    if (
      data?.email === "autipruthviraj@gmail.com" &&
      data?.password === "mh21v3531"
    ) {
      setShowError(false);
      setError("");
      navigate("/admin/allrequests");
    } else {
      setError("Please Fill Correct Details");
      setShowError(true);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Admin Login</h2>
      <div>
        <div className={styles.field}>
          <b>Email *</b>
          <input
            type="email"
            placeholder="Enter your email"
            value={data?.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className={`${styles.field} ${styles.password_field}`}>
          <b>Password *</b>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={data?.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
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
          {showError && (
            <div className={styles.error}>
              {error}
              <i
                className="uil uil-times-circle"
                onClick={() => setShowError(!showError)}
              ></i>
            </div>
          )}
          <button onClick={handleAdmin} className={styles.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
