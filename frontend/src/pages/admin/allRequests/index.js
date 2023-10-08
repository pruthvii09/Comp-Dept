import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../Styles/pages/admin/AllRequests.module.css";
import AllStudents from "../../../Components/admin/All Students";
import AllCertificates from "../../../Components/admin/AllCertificates";
const Index = () => {
  const [request, setRequest] = useState("All Students");
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2>All Requests</h2>
      <div>
        <div className={styles.categoryList}>
          <button onClick={() => setRequest("All Students")}>
            All Students
          </button>
          <button onClick={() => setRequest("Certificate Request")}>
            Certificate Request
          </button>
          <button>Exam Fees</button>
          <button>Survey</button>
          <button onClick={() => navigate("/admin/sendMail")}>
            Send Mails
          </button>
        </div>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>{request}</h3>
        <div>{request === "All Students" ? <AllStudents /> : null}</div>
        <div>
          {request === "Certificate Request" ? <AllCertificates /> : null}
        </div>
      </div>
    </div>
  );
};

export default Index;
