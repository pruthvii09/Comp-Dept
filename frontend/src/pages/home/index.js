import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../Styles/pages/home/Home.module.css";

const Index = () => {
  const navigate = useNavigate();

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
            Department of Computer Engineering at P.E.S's Modern College of
            Engineering started in the year 1999. The department has
            undergraduate (UG) program with intake capacity of 60 (1999) and
            with the increasing intake of 60 (2014) and two years Master
            programme in Computer Engineering started in the year 2011-2012.
          </p>

          <button onClick={() => navigate("/signup")}>Register Now</button>
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
          Jetpack Compose is a modern toolkit for Android that simplifies UI
          progress. It is currently in use by countless apps around the world,
          including Twitter, Airbnb, and Google Play; even if you're not, now is
          a great time to get started. We're introducing Compose Camp, a series
          of in-person and virtual sessions where you can discover how to build
          Android apps with Jetpack Compose along with your friends, to make the
          learning process of Compose even easier. Scoop up your "camping gear"
          and check out how you can take part in this event ASAP!🏋️
        </p>
        <img src="/images/home/android-jetpack.png" alt="" />
        <button onClick={() => navigate("/signup")}>
          <i className="uil uil-bell"></i> Register For Event
        </button>
      </div>

      <div className={styles.join}>
        <img src="/images/gdsc-logo.gif" alt="" />
        <div>
          <h3>Join GDSC PES MCOE 2022</h3>
          <h4>
            <span className={styles.red}>Hello</span>{" "}
            <span className={styles.blue}>there,</span>{" "}
          </h4>
          <p>
            Plan out your plans for developing Android apps📱 and learn the
            fundamentals of Android app development! GDSC is here with an
            amazing Android Compose Camp, which is organised by the community to
            enrich our code monkeys' coding experience! So, what are you still
            waiting for?✨✨
          </p>
          <button onClick={() => navigate("/contact")}>Join Now</button>
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
