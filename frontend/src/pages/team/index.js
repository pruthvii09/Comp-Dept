import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import TeamMember from "../../Components/team/TeamMember";
import styles from "../../Styles/pages/team/Team.module.css";

const Index = () => {
  const facultycoordinator = [
    {
      image: "images/photos/itkar.jpg",
      name: "Prof. Dr. Mrs. S. A. Itkar",
      position: "Head of Department",
      linkedin: "",
      github: "",
      twitter: "",
      class: "card1",
    },
  ];

  const lead = [
    {
      image: "images/photos/anandsir.jpg",
      name: "Mr.A.G.Deshmukh",
      position: "SE GFM",
      class: "card5",
    },
    {
      image: "images/photos/deshmukh.jpg",
      name: "Mrs.V.Deshmukh",
      position: "TE GFM",
      class: "card5",
    },
    {
      image: "images/photos/modani.jpg",
      name: "Mr.D.Modani",
      position: "BE GFM",
      class: "card5",
    },
  ];

  const coreteam = [
    {
      image: "images/photos/phulpagar.jpg",
      name: "PROF. DR. B.D. PHULPAGAR",
      position: "Professor",
      class: "card1",
    },
    {
      image: "images/photos/gore.jpg",
      name: "PROF. DR. D.V.Gore",
      position: "Associate Professor",
      class: "card2",
    },
    {
      image: "images/photos/kanase.jpg",
      name: "MRS. J. M. KANASE",
      position: "Assistant Professor",
      class: "card3",
    },
    {
      image: "images/photos/deshpande.jpg",
      name: "MR. S. N. DESHPANDE",
      position: "Assistant Professor",
      class: "card4",
    },
    {
      image: "images/photos/deshmukh.jpg",
      name: "MRS. V. A. DESHMUKH",
      position: "Assistant Professor",
      class: "card1",
    },
    {
      image: "images/photos/nemade.jpg",
      name: "Mrs.V. A. Nemade",
      position: "Assistant Professor",
      class: "card2",
    },
    {
      image: "images/photos/modani.jpg",
      name: "MR. D.G. MODANI",
      position: "Assistant Professor",
      class: "card3",
    },
    {
      image: "images/photos/patil.jpg",
      name: "MR. P. P. PATIL",
      position: "Assistant Professor",
      class: "card4",
    },
    {
      image: "images/photos/anandsir.jpg",
      name: "MR. A. G. DESHMUKH",
      position: "Assistant Professor",
      class: "card1",
    },
    {
      image: "images/photos/hoval.png",
      name: "Mrs. Priyanka Hoval",
      position: "Assistant Professor",
      class: "card2",
    },

    {
      image: "images/photos/jamgaonkar.png",
      name: "Mrs. A. A. Jamgaonkar",
      position: "Assistant Professor",
      class: "card3",
    },
    {
      image: "images/photos/rucha.jpg",
      name: "Ms. R. M. Alandikar",
      position: "Assistant Professor",
      class: "card4",
    },
    {
      image: "images/photos/hande.jpg",
      name: "Mrs. P. M. Hande",
      position: "Assistant Professor",
      class: "card1",
    },
    {
      image: "images/photos/otari.jpg",
      name: "Mrs. M. V. Otari",
      position: "Assistant Professor",
      class: "card2",
    },
    {
      image: "images/photos/londe.jpg",
      name: "Ms. S. K. Londhe",
      position: "Assistant Professor",
      class: "card3",
    },
    {
      image: "images/photos/satav.jpg",
      name: "Mrs. S. S. Satav",
      position: "Assistant Professor",
      class: "card4",
    },
    {
      image: "images/photos/kulkarni.png",
      name: "Mrs. R. A. Kulkarni",
      position: "Assistant Professor",
      class: "card1",
    },
    {
      image: "images/photos/kalyankar.png",
      name: "Ms. A. S. Kalyankar",
      position: "Assistant Professor",
      class: "card2",
    },
  ];

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Header>
        <div className={styles.faculty}>
          <h1>Faculty</h1>
        </div>
      </Header>

      <div className={styles.team_container}>
        <h2>Head of Department</h2>
        <div className={styles.team_members}>
          {facultycoordinator?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GFM</h2>
        <div className={styles.team_members}>
          {lead?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>Computer Department Staff</h2>
        <div className={styles.team_members}>
          {coreteam?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
