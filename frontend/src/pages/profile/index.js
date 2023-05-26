import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/profile/Profile.module.css';

const Index = () => {
  const { user, userData, dispatch } = useUserContext();

  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const response = await fetch(`/api/users/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_USER_DATA', payload: json });
      }
    };

    if (user) {
      fetchData();
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      {userData ? (
        <div className={styles.profile_container}>
          <h3>
            Welcome <br /> <span>{userData?.name}</span>
          </h3>
          <p>Thank you for the registration!</p>

          <div className={styles.horizontal_row}></div>

          <div className={styles.information}>
            <h4>Personal Information</h4>
            <p>
              Email: <span>{userData?.email}</span>
            </p>
            <p>
              Contact Number: <span>{userData?.contact}</span>
            </p>
            <p>
              College: <span>{userData?.college}</span>
            </p>
            <p>
              Year: <span>{userData?.year}</span>
            </p>
          </div>

          <div className={styles.horizontal_row}></div>

          <div>
            <h5>Quizzes for the selected categories will be live soon.</h5>
            <div className={styles.buttons}>
              {userData?.quizCategory?.map((category) => (
                <button
                  key={category}
                  onClick={() => navigate(`/quiz/${category}`)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.horizontal_row}></div>

          <p className={styles.contact_line}>
            If any query feel free to contact us{' '}
            <Link to="/contact">Click here!</Link>
          </p>
        </div>
      ) : (
        <div className={styles.profile_container}>
          <h3>Loading....</h3>
        </div>
      )}
    </div>
  );
};

export default Index;
