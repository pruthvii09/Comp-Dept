import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/Header';
import TeamMember from '../../Components/team/TeamMember';
import styles from '../../Styles/pages/team/Team.module.css';

const Index = () => {
  const facultycoordinator = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2Ffaculty-cor.png?alt=media&token=2fa598eb-da65-43d5-b2d9-5baf038f9fd6',
      name: 'Mr. A. G. Deshmukh',
      position: 'Faculty Coordinator',
      linkedin: '',
      github: '',
      twitter: '',
      class: 'card1',
    },
  ];

  const lead = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F1.png?alt=media&token=7a9149aa-9ea1-4591-b8dc-55e2117fdd1e',
      name: 'Snehal Nair',
      position: 'GDSC Lead',
      linkedin: 'https://www.linkedin.com/in/snehal-nair-2980b41b9',
      github: 'https://github.com/Snehalnair88',
      twitter: '',
      class: 'card5',
    },
  ];

  const coreteam = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F2.png?alt=media&token=d4ea3310-6135-472b-a1cc-572aea2de1ed',
      name: 'Parth Shete',
      position: 'Web Development Lead',
      linkedin: 'https://www.linkedin.com/in/parthshete/',
      github: 'https://github.com/Parth-Shete',
      twitter: 'https://twitter.com/parthshete02',
      class: 'card1',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F3.jpg?alt=media&token=55b04254-5c2a-47ea-b4be-60f30b6372cf',
      name: 'Kartik Bade',
      position: 'Cyber Security Lead',
      linkedin: 'https://www.linkedin.com/in/kartik-bade',
      github: 'https://github.com/KartikBade',
      twitter: 'https://twitter.com/kartik_bade?t=O8eqvzHGacWNErJ00SUejg&s=08',
      class: 'card2',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F4.png?alt=media&token=315a9279-7610-485b-9aca-35a4a017e8ae',
      name: 'Parth Joshi',
      position: 'Android Lead',
      linkedin: 'https://www.linkedin.com/in/parth-joshi-48041b21a',
      github: 'https://github.com/RotenKiwi',
      twitter: '',
      class: 'card3',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F5.png?alt=media&token=33eff14a-c721-4395-bc3b-98b55572c0ad',
      name: 'Tanay Dubey',
      position: 'Google Cloud Lead',
      linkedin: 'https://www.linkedin.com/in/tanay-dubey-ab5145227/',
      github: 'https://github.com/Tanay-Dubey',
      twitter: '',
      class: 'card4',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F6.png?alt=media&token=7282aaca-f0da-4326-b3ed-bc7528a150b7',
      name: 'Alekhya Siddi',
      position: 'Event Lead',
      linkedin: 'https://www.linkedin.com/in/alekhya-siddi',
      github: 'https://github.com/Alekhya193',
      twitter: '',
      class: 'card1',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F8.png?alt=media&token=87b48584-9239-47ea-9246-4030fd5ac139',
      name: 'Pooja Sanap',
      position: 'Blockchain Lead',
      linkedin: 'https://www.linkedin.com/in/poojasanap53',
      github: 'https://github.com/pooja-sanap-53',
      twitter: '',
      class: 'card2',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F9.png?alt=media&token=94474269-2c20-4327-99d7-1712013fa86c',
      name: 'Ishani Deshmukh',
      position: 'Content Lead',
      linkedin: 'https://www.linkedin.com/in/ishani-deshmukh-21b3311a6',
      github: 'https://github.com/deathmukh',
      twitter: 'https://twitter.com/ishewwww?t=GOjmJO8MAr7YvM_MbwVw0g&s=09',
      class: 'card3',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F10.png?alt=media&token=fea72812-c97c-4c50-b00b-3762020d6a83',
      name: 'Anvesh Samrit',
      position: 'UI/UX Lead',
      linkedin: 'https://www.linkedin.com/in/anvesh-samrit-2b4b3a216',
      github: 'https://github.com/WHOanvesh',
      twitter: 'https://twitter.com/MiniSpeaker3?t=4EJZeukXa6fcx5VW5ET2QQ&s=09',
      class: 'card4',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F7.png?alt=media&token=db4ae0d9-962d-44d8-b08e-d4654e5f1910',
      name: 'Shruti Satpute',
      position: 'Design Lead',
      linkedin: 'https://www.linkedin.com/in/shruti-satpute-431a4224b',
      github: '',
      twitter: '',
      class: 'card1',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F11.png?alt=media&token=bee72818-82f1-4c23-ae8c-65ae2a359725',
      name: 'Harshwardhan Wandeshkhar',
      position: 'AI/ML Lead',
      linkedin: 'https://www.linkedin.com/in/harshwardhan-wandeshkar-3968b1239',
      github: '',
      twitter: 'https://twitter.com/HWandeshkar?t=wB1ycOps_81HahVa98uyww&s=09',
      class: 'card2',
    },
  ];

  const webdevteam = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F13.png?alt=media&token=c358a515-a67f-4036-ace7-3f81cdc1a2bf',
      name: 'Dhananjay Kuber',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/dhananjaykuber/',
      github: 'https://github.com/dhananjaykuber',
      twitter: 'https://twitter.com/dhananjaykuber_',
      class: 'card1',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F14.png?alt=media&token=9d5588c3-21bd-41dc-8613-6c5b7791969c',
      name: 'Pruthviraj Auti',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/pruthviraj-auti-1b90ab231',
      github: 'https://github.com/pruthvii09',
      twitter:
        'https://twitter.com/AutiPruthviraj?t=yDxgrw5HxRQExzb_V368Sw&s=09',
      class: 'card2',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F15.png?alt=media&token=89ec0bc6-fc24-4ffa-a983-bd2e1f56835e',
      name: 'Sarvesh Joshi',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/sarvesh-s-joshi',
      github: 'https://github.com/SarveshJoshi25',
      twitter: 'https://twitter.com/_SarveshJoshi',
      class: 'card3',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F5.png?alt=media&token=33eff14a-c721-4395-bc3b-98b55572c0ad',
      name: 'Tanay Dubey',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/tanay-dubey-ab5145227/',
      github: 'https://github.com/Tanay-Dubey',
      twitter: '',
      class: 'card4',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/team%2F16.png?alt=media&token=494074d5-cc7d-4f06-8281-e652d6be0f3e',
      name: 'Shubham Pawar',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/shubhampawar99',
      github: 'https://github.com/Shubham5250',
      twitter:
        'https://twitter.com/ShubhamPawar93?t=FaW5MCQTVpki3LXGv7kAHQ&s=09',
      class: 'card1',
    },
  ];

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Header>
        <h1>
          <span className={styles.blue}>Meet</span>{' '}
          <span className={styles.green}>The</span>{' '}
          <span className={styles.red}>Team</span>
        </h1>
        <p>
          Coming together is a beginning. Keeping together is progress. Working
          together is success. Meet the core team of GDSC | PES MCOE 2022
        </p>
      </Header>

      <div className={styles.team_container}>
        <h2>Faculty Coordinator</h2>
        <div className={styles.team_members}>
          {facultycoordinator?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GDSC Lead 2022</h2>
        <div className={styles.team_members}>
          {lead?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GDSC Core Team 2022</h2>
        <div className={styles.team_members}>
          {coreteam?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GDSC Web Dev Team 2022</h2>
        <div className={styles.team_members}>
          {webdevteam?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
