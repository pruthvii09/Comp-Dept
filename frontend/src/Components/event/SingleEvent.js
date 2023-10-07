import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/event/Event.module.css';

const SingleEvent = ({ event }) => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  return (
    <div className={styles.event}>
      <div className={styles.left_container}>
        <img style={{borderRadius:"5px"}} src={event?.image} alt={event?.name} />
      </div>

      <div className={styles.right_container}>
        <h3>{event?.name}</h3>

        {event?.paragraphs?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

        <div className={styles.divider}></div>

        <div className={styles.schedule}>
          <h4>Schedule</h4>
          <span>
            <i className="uil uil-notes"></i>
            Date: {event?.schedule?.date}
          </span>
          <span>
            <i className="uil uil-clock"></i>Time: {event?.schedule?.time}
          </span>
          <span>
            <i className="uil uil-map-pin"></i>Venue: {event?.schedule?.venu}
          </span>
        </div>
        {event?.register &&
          (user ? (
            <h6>You have already registered for this event!</h6>
          ) : (
            <button onClick={() => navigate('/signup')}>
              Register For Event
            </button>
          ))}
      </div>
    </div>
  );
};

export default SingleEvent;
