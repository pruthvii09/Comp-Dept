import React from 'react';
import styles from '../../Styles/components/TeamMember.module.css';
import '../../Styles/components/TeamMember.module.css';

const TeamMember = ({ member }) => {
  return (
    <div
      className={`${styles.card} ${
        member?.class === 'card1'
          ? styles.card1
          : member?.class === 'card2'
          ? styles.card2
          : member?.class === 'card3'
          ? styles.card3
          : member?.class === 'card4'
          ? styles.card4
          : styles.card5
      }`}
    >
      <div>
        <div
          className={`${styles.card_image} ${
            member?.class === 'card1'
              ? styles.card_image1
              : member?.class === 'card2'
              ? styles.card_image2
              : member?.class === 'card3'
              ? styles.card_image3
              : member?.class === 'card4'
              ? styles.card_image4
              : styles.card_image5
          }`}
        >
          <img src={member?.image} alt={`${member?.name}_profile`} />
        </div>

        <div className={styles.card_body}>
          <h3 className={styles.name}>{member?.name}</h3>
          <h4 className={styles.position}>{member?.position}</h4>

          <ul
            className={`${styles.social_links} 
            ${
              member?.class === 'card1'
                ? styles.social_links1
                : member?.class === 'card2'
                ? styles.social_links2
                : member?.class === 'card3'
                ? styles.social_links3
                : member?.class === 'card4'
                ? styles.social_links4
                : styles.social_links5
            }
            `}
          >
            {member?.linkedin && (
              <li>
                <a href={member?.linkedin} target="_blank">
                  <i className="uil uil-linkedin-alt"></i>
                </a>
              </li>
            )}
            {member?.github && (
              <li>
                <a href={member?.github} target="_blank">
                  <i className="uil uil-github-alt"></i>
                </a>
              </li>
            )}
            {member?.twitter && (
              <li>
                <a href={member?.twitter} target="_blank">
                  <i className="uil uil-twitter-alt"></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
