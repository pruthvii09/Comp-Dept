import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const [message, setMessage] = useState('');

  const [disableSignup, setDisableSignup] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleUpdatePassword = async () => {
    setDisableSignup(true);

    if (password.length <= 0 || confirmPassword.length <= 0) {
      setError('Please enter password!');
      setShowError(true);
    } else if (password !== confirmPassword) {
      setError('Password did not match!');
      setShowError(true);
    } else {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/users/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        }
      );

      const json = await response.json();

      if (response.ok) {
        setMessage(json.message);

        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
    setDisableSignup(false);
  };
  return (
    <div style={{ marginBottom: '150px' }}>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '150px',
          fontWeight: '400',
          color: '#333',
          fontSize: '25px',
        }}
      >
        Forgot Password
      </h2>
      <div className={styles.container} style={{ marginTop: '-40px' }}>
        <div className={styles.form} style={{ marginTop: '90px' }}>
          <div>
            <div className={styles.field}>
              <b>Password *</b>
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className={styles.field}>
              <b>Confirm Password *</b>
              <input
                type="text"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {showError && (
            <div className={styles.error}>
              {error}
              <i
                class="uil uil-times-circle"
                onClick={() => setShowError(!showError)}
              ></i>
            </div>
          )}

          {message && (
            <div className={`${styles.error} ${styles.message}`}>
              {message}
              <i
                class="uil uil-times-circle"
                onClick={() => setMessage('')}
              ></i>
            </div>
          )}

          <button
            onClick={handleUpdatePassword}
            disabled={disableSignup}
            className={disableSignup ? styles.disabled : ''}
          >
            {disableSignup ? (
              <>
                {' '}
                Updating Password <Spinner />
              </>
            ) : (
              'Update Password'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
