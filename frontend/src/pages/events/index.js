import React, { useEffect } from "react";
import Header from "../../Components/Header";
import SingleEvent from "../../Components/event/SingleEvent";
import styles from "../../Styles/pages/event/Event.module.css";
import { useLocation } from "react-router-dom";

const Index = () => {
  const upcomingevents = [
    {
      id: 1,
      image:
        "images/photos/upcomingbrain.jpeg",
      name: "Android Compose Camp",
      paragraphs: [
        "Compose Camps are community-organized events that teach people how to create Android apps 📱 with Jetpack Compose. Join us now!! This is your time to shine! Get hands- on experience on technologies from Google and excel in your expertise with this event🎉✨",
        "By the end of this event you will have-",
        "👉 Discovered how actual Android applications work, as well as their architecture and flows.",
        "👉 An excellent addition to a resume",
        "👉 Google developer profile: obtain multiple badges as well as a final certificate of achievement",
        "👉 Received prizes for successful project submissions",
      ],
      schedule: {
        date: "28 September, 2022",
        time: "3:00 PM - 5:30 PM",
        venu: "AIDS Seminar Hall",
      },
      register: true,
    },
  ];

  const pastevents = [
    {
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/gdsc-pesmcoe-2022.appspot.com/o/events%2Forientation.jpeg?alt=media&token=d622832d-8079-4dfa-97c7-ddb03d361618",
      name: "GDSC Orientation 2022",
      paragraphs: [
        "GDSC PESMCOE successfully conducted our debut event, the orientation for the tenure 2022-23. The goal of GDSC is to bridge the knowledge gap between theory and practice by implementing Google technologies to address issues in our community. The club was successfully launched in classroom 424 on September 17, 2022, from 12:30 pm to 1:30pm",
      ],
      schedule: {
        date: "17 September, 2022",
        time: "12:30 PM - 1:30PM",
        venu: "Classroom 424 (Comp)",
      },
      register: false,
    },
  ];


  const upcomingevents1 = [
    {
      id: 1,
      image:
        "images/photos/upcomingbrain.jpeg",
      name: "Seminar on Resume Building",
      paragraphs: [
      "Seminars enhance learning, critical thinking, and communication skills while offering opportunities for networking and future career growth.A resume building seminar equips students with essential skills and knowledge to effectively market themselves to potential employers, enhancing their career prospects and long-term professional success."
      ],
      schedule: {
        date: "14 October, 2023",
        time: "3:00 PM - 4:30 PM",
        venu: "Classroom 424(Comp)",
      },
      
      register: true,
    },
  ];
  const pastevents1 = [
    {
      id: 1,
      image:
        "images/photos/brainstromersmeet.jpg",
      name: "Technical Quiz",
      paragraphs: [
        "Technical quiz focuses on testing knowledge and understanding of technical subjects. It may be used to access the knowledge of students, professionals, or enthusiasts in a particular field, and may be conducted in various formats, such as online quizzes, written tests or live competitions.",
      ],
      schedule: {
        date: "1 September, 2023",
        time: "3:30 PM - 4:30PM",
        venu: "Hardware Lab(Comp)",
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
       <div className={styles.club}>
       <h1>
         Clubs
        </h1>
       </div>
        <p>
          Joining an on-campus club can provide personal, social, and
          professional benefits. Clubs can help you find community, make
          friends, network, and have fun.
        </p>
      </Header>

      <div className={styles.events_container}>
        <h1>GDSC</h1>
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

      <div className={styles.events_container}>
        <h1>BrainStormers</h1>
        <h2>Upcoming Events</h2>
        <div className={styles.horizontal_row}></div>
        {upcomingevents1?.map((upcomingevent) => (
          <SingleEvent event={upcomingevent} key={upcomingevent.id} />
        ))}
      </div>
        
      <div className={styles.events_container}>
      <h2>Past Events</h2>
        <div className={styles.horizontal_row}></div>
        {pastevents1?.map((pastevent) => (
          <SingleEvent event={pastevent} key={pastevent.id} />
        ))}
      </div>
    </div>
  );
};

export default Index;
