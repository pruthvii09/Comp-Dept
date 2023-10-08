import React, { useState } from "react";
import styles from "../../../Styles/pages/admin/SendMail.module.css";
import Header from "../../../Components/Header";
import Dialog from "../../../Components/Dialog";
import Spinner from "../../../Components/Spinner";
import e from "cors";
const Index = () => {
  const [mailDetails, setMailDetails] = useState({
    subject: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const handleMailSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (mailDetails.subject <= 0 || mailDetails.content <= 0) {
      setError("Fill All Details");
      setShowError(true);
    }
    const response = await fetch(`http://localhost:4000/api/users/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...mailDetails }),
    });
    const json = await response.json();
    if (response.ok) {
      setMailDetails({
        subject: "",
        content: "",
      });
      setOpenDialog(true);
      setLoading(false);
    }
    if (!response.ok) {
      setError(json.error);
      setShowError(true);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1 className={styles.header_heading}>Send Mail</h1>
        <p className={styles.contact_header_p}>Send Mail To All Users</p>
      </Header>

      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.right_side}>
              <div className={styles.topic_text}>Write up Your Email</div>
              <h1>Send Mail</h1>

              <form>
                <div className={styles.input_box}>
                  <input
                    type="text"
                    placeholder="Enter Subject of Mail"
                    value={mailDetails.subject}
                    onChange={(e) =>
                      setMailDetails({
                        ...mailDetails,
                        subject: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className={`${styles.input_box} ${styles.message_box}`}>
                  <textarea
                    placeholder="Write Mail Here...."
                    value={mailDetails.content}
                    onChange={(e) =>
                      setMailDetails({
                        ...mailDetails,
                        content: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                {showError && (
                  <div className={styles.error}>
                    {error}{" "}
                    <i
                      className="uil uil-times-circle"
                      onClick={() => setShowError(!showError)}
                    ></i>
                  </div>
                )}
                <div className={styles.button}>
                  <div className={styles.sendBtn}>
                    <button onClick={handleMailSend}>Send Now</button>
                    {loading && <Spinner />}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Mail Sent!"}
        children={<div>Mail Sent Successfully</div>}
      />
    </div>
  );
};

export default Index;
