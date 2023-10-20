import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../Styles/pages/home/Home.module.css";

const Index = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState("Infrastructure");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.home} id="#home">
      <div className={styles.container}>
        <div className={styles.left_container}>
          <h1 className={styles.heading}>Computer Department, PESMCOE</h1>
          <p>Hello there People</p>
          <p>
            Department of Computer Engineering started in the year 1999. The
            department has undergraduate (UG) program with intake capacity of
            120 (1999) and with the increasing intake of 60 (2014) and two years
            Master programme in Computer Engineering started in the year
            2011-2012.
          </p>

          <button onClick={() => navigate("/signup")}>ERP Login</button>
        </div>
        <div className={styles.right_container}>
          <img src="/images/home/home-hero.svg" alt="Home_Hero_Image" />
        </div>
      </div>

      <div className={styles.about}>
        <h2>
          Why <b>Computer Department PESMCOE ?</b>
        </h2>
        <div className={styles.horizontal_row}></div>
        <p>
          The department continuously works on improving our teaching learning
          process to better meet the needs of today’s students and employers.
          Many of the courses have laboratory components that enrich the
          students’ learning experience by allowing them to be exposed to theory
          and practice. We strive to provide our students with an outstanding
          educational experience that prepares them for the highest personal and
          professional achievements.The department has fully equipped
          laboratories supervised by experienced, qualified staff, with latest
          configured machines. Department of Computer Engineering has achieved
          2016 GPU Education Center award From NVIDIA.
        </p>
        <img
          style={{ borderRadius: "5px" }}
          src="/images/photos/sl1.jpg"
          alt=""
        />
        <button onClick={() => navigate("/signup")}>
          <i className="uil uil-bell"></i> ERP Login
        </button>
      </div>

      <div className={styles.gallary}>
        <h2>Gallary</h2>
        <div className={styles.galimages}>
          <img src="/images/photos/ol1.jpg" className={styles.images} />
          <img src="/images/photos/ol1.jpg" className={styles.images} />
          <img src="/images/photos/ol1.jpg" className={styles.images} />
          <img src="/images/photos/ol1.jpg" className={styles.images} />
          <img src="/images/photos/ol1.jpg" className={styles.images} />
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0738568129304!2d73.84422261481328!3d18.5255642874061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e4111123b%3A0x3f92335c2e5c8400!2sP.E.S.%20Modern%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1663607696037!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          title="PES Modern College Of Engineering, Pune"
        ></iframe>
      </div>
    </div>
  );
};

export default Index;
