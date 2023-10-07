import React from "react";
import Header from "../../Components/Header";
import styles from "../../Styles/pages/contact/Contact.module.css";

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1 className={styles.header_heading}>Notices</h1>
      </Header>

      <div className={styles.contact_container}>
        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>BE (Computer Engineering)-2019 Course</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>TE (Computer Engineering)-2019 Course</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>SE (Computer Engineering)- 2019 COURSE</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>TE (Computer Engineering)- 2015 COURSE</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>SE (Computer Engineering)- 2015 COURSE</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>BE (Computer Engineering)- 2015 COURSE</p>
        </a>

        <a href="pdf/Admission Notice 2023-24.pdf" className={styles.notices}>
          <img src="images/photos/pdf.png" alt="" />
          <p>BE (Computer Engineering)- 2012 COURSE</p>
        </a>
      </div>
    </div>
  );
};

export default Index;
