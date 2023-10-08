import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "../../Styles/pages/profile/Profile.module.css";
import Dialog from "../../Components/Dialog";

const Index = () => {
  const navigate = useNavigate();
  const { user, userData, dispatch } = useUserContext();
  console.log("helodjdj0", userData);
  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState("");
  const [boxType, setBoxType] = useState("");
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState({
    name: "",
    month: "",
    year: "",
    prn: "",
    recieved: false,
    user: userData ? userData?._id : "undefined",
  });
  const [examData, setExamData] = useState({
    examNo: "",
    examPrn: "",
    fees: "",
    user: userData ? userData?._id : "undefined",
  });
  console.log("first,", userData?._id);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      console.log("userData._id is not available yet.");
      return; // Exit early if _id is not available yet
    }
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
  }, [user]);
  const handleButtonClick = (type) => {
    console.log(type);
    setBoxType(type);
    setOpenDialog(true);
  };
  const handleFees = async () => {
    setError("");
    if (!userData) {
      console.log("userData._id is not available yet.");
      return; // Exit early if _id is not available yet
    }
    console.log(examData);
    if (
      examData?.examNo.length <= 0 ||
      examData?.examPrn.length <= 0 ||
      examData?.fees.length <= 0 ||
      examData?.user.length <= 0
    ) {
      setError("Please enter all the details");
      setShowError(true);
    } else {
      var options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
        amount: parseInt(examData.fees) * 100,
        currency: "INR",
        name: "COMP Department PESMCOE",
        description: "PESMCOE payment gateway",
        handler: function () {
          navigate("/profile");
        },
        preFill: {
          examNo: examData.examNo,
          examPrn: examData.examPrn,
          fees: examData.fees,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#800acf",
        },
      };
      const response = await fetch(`http://localhost:4000/api/fees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...examData }),
      });
      const json = await response.json();
      if (response.ok) {
        setExamData({
          examNo: "",
          examPrn: "",
          fees: "",
          recieved: false,
          user: userData?._id,
        });
        setOpenDialog(false);
        var pay = new window.Razorpay(options);
        pay.open();
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
  };
  const handleCertificate = async () => {
    setShowError(false);
    setError("");
    setEmptyFields([]);
    if (data?.name?.length < 5) {
      setError("Name must be at least 5 characters long!");
      setShowError(true);
      setEmptyFields([...emptyFields, "name"]);
    } else if (data?.month?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, "month"]);
      setError("Please enter Exam Month!");
      setShowError(true);
    } else if (data?.year?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, "year"]);
      setError("Please Enter Exam Year");
      setShowError(true);
    } else if (data?.prn?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, "prn"]);
      setError("Please PRN No.");
      setShowError(true);
    } else {
      const response = await fetch(`http://localhost:4000/api/certificate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const json = await response.json();
      if (response.ok) {
        setData({
          name: "",
          month: "",
          year: "",
          prn: "",
          user: "",
        });
        setOpenDialog(false);
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
  };
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
            <button onClick={() => navigate(`/quiz/survey`)}>
              Mid Term Servry
            </button>
            <button onClick={() => handleButtonClick("Certificate Request")}>
              Certificate Request
            </button>
            <button onClick={() => handleButtonClick("Exam Form")}>
              Exam Form
            </button>
            <button onClick={() => navigate("/allCertificates")}>
              All Requests
            </button>
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
      {boxType === "Certificate Request" ? (
        <Dialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title={"Request Certificate"}
          children={
            <div style={{ width: "100%" }}>
              <p style={{ marginBottom: "20px" }}>Fill The Following Form</p>
              <div className={styles.field}>
                <b>Name *</b>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={data?.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className={
                    emptyFields?.includes("name") ? styles.error_field : ""
                  }
                />
              </div>
              <div className={styles.field}>
                <b>Month *</b>
                <input
                  type="text"
                  placeholder="Enter Month"
                  value={data?.month}
                  onChange={(e) => setData({ ...data, month: e.target.value })}
                  className={
                    emptyFields?.includes("month") ? styles.error_field : ""
                  }
                />
              </div>
              <div className={styles.field}>
                <b>Year *</b>
                <input
                  type="text"
                  placeholder="Enter Year"
                  value={data?.year}
                  onChange={(e) => setData({ ...data, year: e.target.value })}
                  className={
                    emptyFields?.includes("year") ? styles.error_field : ""
                  }
                />
              </div>
              <div className={styles.field}>
                <b>PRN No. *</b>
                <input
                  type="text"
                  placeholder="Enter your PRN No."
                  value={data?.prn}
                  onChange={(e) => setData({ ...data, prn: e.target.value })}
                  className={
                    emptyFields?.includes("prn") ? styles.error_field : ""
                  }
                />
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
              <button onClick={handleCertificate} className={styles.button}>
                <Link to="/profile" style={{ color: "white" }}>
                  Submit
                </Link>
              </button>
            </div>
          }
        />
      ) : null}
      {boxType === "Exam Form" ? (
        <Dialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          title={"Exam Form"}
          children={
            <div style={{ width: "100%" }}>
              <p style={{ marginBottom: "20px" }}>Fill The Following Form</p>
              <div className={styles.field}>
                <b>Exam Form No. *</b>
                <input
                  type="text"
                  placeholder="Enter Exam Form No."
                  value={data?.examNo}
                  onChange={(e) =>
                    setExamData({ ...examData, examNo: e.target.value })
                  }
                  className={
                    emptyFields?.includes("examNo") ? styles.error_field : ""
                  }
                />
              </div>
              <div className={styles.field}>
                <b>PRN No.</b>
                <input
                  type="text"
                  placeholder="Enter Month"
                  value={examData?.examPrn}
                  onChange={(e) =>
                    setExamData({ ...examData, examPrn: e.target.value })
                  }
                  className={
                    emptyFields?.includes("examPRN") ? styles.error_field : ""
                  }
                />
              </div>
              <div className={styles.field}>
                <b>Fees *</b>
                <input
                  type="text"
                  placeholder="Enter Fees"
                  value={examData?.fees}
                  onChange={(e) =>
                    setExamData({ ...examData, fees: e.target.value })
                  }
                  className={
                    emptyFields?.includes("fees") ? styles.error_field : ""
                  }
                />
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
              <button onClick={handleFees} className={styles.button}>
                <Link to="/profile" style={{ color: "white" }}>
                  Submit
                </Link>
              </button>
            </div>
          }
        />
      ) : null}
    </div>
  );
};

export default Index;
