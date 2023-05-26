import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dialog from '../../Components/Dialog';
import Spinner from '../../Components/Spinner';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const [message, setMessage] = useState('');

  const [openDialog, setOpenDialog] = useState(false);

  const [disableSignup, setDisableSignup] = useState(false);

  const [email, setEmail] = useState('');

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSendEmail = async () => {
    setDisableSignup(true);
    setShowError(false);
    setError('');
    setMessage('');

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/api/users/forget`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      }
    );

    const json = await response.json();

    if (response.ok) {
      setMessage(json.message);
      setOpenDialog(true);
    }
    if (!response.ok) {
      setError(json.error);
      setShowError(true);
    }
    setDisableSignup(false);
  };

  return (
    <div style={{ marginBottom: '150px' }}>
      <h2
        style={{
          textAlign: 'center',
          marginTop: '180px',
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
              <b>Email *</b>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSendEmail}
            disabled={disableSignup}
            className={disableSignup ? styles.disabled : ''}
          >
            {disableSignup ? (
              <>
                {' '}
                Sending email <Spinner />
              </>
            ) : (
              'Send Link'
            )}
          </button>
        </div>
      </div>

      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={'Email Sent Successfully!'}
        children={
          <div>
            <p>{message}. Please check you email to reset your password!</p>
          </div>
        }
      />
    </div>
  );
};

export default Index;
