import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import SingleEvent from '../../Components/event/SingleEvent';
import styles from '../../Styles/pages/event/Event.module.css';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const upcomingevents = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/events%2Fandroid-compose-camp-event.png?alt=media&token=9e33449a-2253-4731-8cdf-9dfdb323a67e',
      name: 'Android Compose Camp',
      paragraphs: [
        'Compose Camps are community-organized events that teach people how to create Android apps 📱 with Jetpack Compose. Join us now!! This is your time to shine! Get hands- on experience on technologies from Google and excel in your expertise with this event🎉✨',
        'By the end of this event you will have-',
        '👉 Discovered how actual Android applications work, as well as their architecture and flows.',
        '👉 An excellent addition to a resume',
        '👉 Google developer profile: obtain multiple badges as well as a final certificate of achievement',
        '👉 Received prizes for successful project submissions',
      ],
      schedule: {
        date: '28 September, 2022',
        time: '3:00 PM - 5:30 PM',
        venu: 'AIDS Seminar Hall',
      },
      register: true,
    },
  ];

  const pastevents = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/events%2Forientation.jpeg?alt=media&token=d622832d-8079-4dfa-97c7-ddb03d361618',
      name: 'GDSC Orientation 2022',
      paragraphs: [
        'GDSC PESMCOE successfully conducted our debut event, the orientation for the tenure 2022-23. The goal of GDSC is to bridge the knowledge gap between theory and practice by implementing Google technologies to address issues in our community. The club was successfully launched in classroom 424 on September 17, 2022, from 12:30 pm to 1:30pm',
      ],
      schedule: {
        date: '17 September, 2022',
        time: '12:30 PM - 1:30PM',
        venu: 'Classroom 424 (Comp)',
      },
      register: false,
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
          <span className={styles.blue}>Ev</span>
          <span className={styles.green}>en</span>
          <span className={styles.red}>ts</span>
        </h1>
        <p>
          The main motive behind each and every event of GDSC | PES MCOE is
          spreading knowledge and giving inspiration to developers.
        </p>
      </Header>

      <div className={styles.events_container}>
        <h2>Upcoming Events</h2>
        <div className={styles.horizontal_row}></div>
        {upcomingevents?.map((upcomingevent) => (
          <SingleEvent event={upcomingevent} key={upcomingevent.id} />
        ))}
      </div>

      <div className={styles.events_container}>
        <h2>Past Events</h2>
        <div className={styles.horizontal_row}></div>
        {pastevents?.map((pastevent) => (
          <SingleEvent event={pastevent} key={pastevent.id} />
        ))}
      </div>
    </div>
  );
};

export default Index;
