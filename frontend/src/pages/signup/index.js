import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dialog from '../../Components/Dialog';
import Header from '../../Components/Header';
import Spinner from '../../Components/Spinner';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
  const { dispatch } = useUserContext();

  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    year: '',
    password: '',
    quizCategory: [],
  });

  const [openDialog, setOpenDialog] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [disableSignup, setDisableSignup] = useState(false);

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleCategory = (e) => {
    const { value, checked } = e.target;

    checked
      ? setData({ ...data, quizCategory: [...data.quizCategory, value] })
      : setData({
          ...data,
          quizCategory: data.quizCategory.filter((cat) => cat !== value),
        });
  };

  const handleSignUp = async () => {
    setDisableSignup(true);
    setShowError(false);
    setError('');
    setEmptyFields([]);

    if (data?.name?.length < 5) {
      setError('Name must be at least 5 characters long!');
      setShowError(true);
      setEmptyFields([...emptyFields, 'name']);
    } else if (data?.email?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, 'email']);
      setError('Please enter email!');
      setShowError(true);
    } else if (data?.contact?.length !== 10) {
      setEmptyFields((emptyFields) => [...emptyFields, 'contact']);
      setError('Contact number must be at exacty 10 digits long!');
      setShowError(true);
    } else if (data?.college?.length <= 0) {
      setError('Please enter college name!');
      setShowError(true);
      setEmptyFields((emptyFields) => [...emptyFields, 'college']);
    } else if (data?.year?.length <= 0) {
      setError('Please select year!');
      setShowError(true);
      setEmptyFields((emptyFields) => [...emptyFields, 'year']);
    } else if (data?.password?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, 'password']);
      setError('Please enter password!');
      setShowError(true);
    } else if (!data?.quizCategory?.length >= 1) {
      setError('Please select at one catgory for quiz!');
      setShowError(true);
    } else {
      console.log(process.env.REACT_APP_BACKEND_URI);
      const response = await fetch(`/api/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });
      const json = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(json));
        setData({
          name: '',
          email: '',
          contact: '',
          college: '',
          year: '',
          password: '',
          quizCategory: [],
        });
        setTimeout(() => {
          dispatch({ type: 'LOGIN', payload: json });
        }, 2000);
        setOpenDialog(true);
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
    setDisableSignup(false);
  };

  return (
    <div className={styles.wrapper}>
      <Header>
        <h1>
          <span className={styles.blue}>Si</span>
          <span className={styles.green}>gn</span>
          <span className={styles.red}>Up</span>
        </h1>
        <p>
          Welcome to Android Compose Camp 2022 - Powered by PES MCOE GDSC.
          Register to join this amazing event!
        </p>
      </Header>

      <div className={styles.container}>
        <div className={styles.left_container}>
          <img src="/images/home/home-hero.svg" alt="" />
        </div>
        <div className={styles.form}>
          <div>
            <div className={styles.field}>
              <b>Name *</b>
              <input
                type="text"
                placeholder="Enter you name"
                value={data?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className={
                  emptyFields?.includes('name') ? styles.error_field : ''
                }
              />
            </div>
            <div className={styles.field}>
              <b>Email *</b>
              <input
                type="email"
                placeholder="Enter your email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className={
                  emptyFields?.includes('email') ? styles.error_field : ''
                }
              />
            </div>
            <div className={styles.field}>
              <b>Contact Number *</b>
              <input
                type="text"
                placeholder="Enter you contact number"
                value={data?.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
                className={
                  emptyFields?.includes('contact') ? styles.error_field : ''
                }
              />
            </div>
            <div className={styles.field}>
              <b>College Name *</b>
              <input
                type="text"
                placeholder="Enter your college name"
                value={data?.college}
                onChange={(e) => setData({ ...data, college: e.target.value })}
                className={
                  emptyFields?.includes('college') ? styles.error_field : ''
                }
              />
            </div>
            <div className={styles.field}>
              <b>Select Year *</b>
              <select
                onChange={(e) => setData({ ...data, year: e.target.value })}
                className={
                  emptyFields?.includes('email') ? styles.error_field : ''
                }
              >
                <option value="" disabled={true} selected={true}>
                  Select your year
                </option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </select>
            </div>
            <div className={`${styles.field} ${styles.password_field}`}>
              <b>Password *</b>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={data?.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className={
                  emptyFields?.includes('email') ? styles.error_field : ''
                }
              />
              {showPassword ? (
                <i
                  className="uil uil-eye-slash"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              ) : (
                <i
                  className="uil uil-eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              )}
            </div>
            <div
              className={`${styles.field} ${styles.quiz_categories}`}
              style={{ border: '1px solid #c5c5c5', padding: '12px' }}
            >
              <p>
                <span>Select quizzes category</span>
              </p>
              <p>Non Tech</p>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    value="Marvel universe"
                    onChange={handleCategory}
                  />{' '}
                  Marvel universe
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Friends show"
                    onChange={handleCategory}
                  />{' '}
                  Friends show
                </label>
              </div>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    value="English OTT"
                    onChange={handleCategory}
                  />{' '}
                  English OTT
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Hindi OTT"
                    onChange={handleCategory}
                  />{' '}
                  Hindi OTT
                </label>
              </div>
              <label>
                <input
                  type="checkbox"
                  value="Harry Potter"
                  onChange={handleCategory}
                />{' '}
                Harry Potter
              </label>
              <br />
              <p>Tech</p>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    value="Android"
                    onChange={handleCategory}
                  />{' '}
                  Android
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Google and Web3"
                    onChange={handleCategory}
                  />{' '}
                  Google and Web3
                </label>
              </div>
            </div>
          </div>
          {showError && (
            <div className={styles.error}>
              {error}
              <i
                className="uil uil-times-circle"
                onClick={() => setShowError(!showError)}
              ></i>
            </div>
          )}
          <button
            onClick={handleSignUp}
            disabled={disableSignup}
            className={disableSignup ? styles.disabled : ''}
          >
            {disableSignup ? (
              <>
                {' '}
                Loading <Spinner />
              </>
            ) : (
              'Signup'
            )}
          </button>
          <p>
            Already have and account? <Link to="/login"> Click here!</Link>
          </p>
          <p style={{ marginTop: '5px' }}>
            Forgot your password? <Link to="/forgot"> Click here!</Link>
          </p>
        </div>
      </div>

      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={'Registration Successful!'}
        children={
          <div>
            <p>Thank you for Android Compose Camp 2022 registration!</p>
            <button className={styles.button}>
              <Link to="/profile" style={{ color: 'white' }}>
                Profile
              </Link>
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Index;
