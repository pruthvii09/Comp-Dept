import React, { useState } from 'react';
import styles from '../../Styles/pages/quiz/Quiz.module.css';
import Spinner from '../Spinner';

const Question = ({
  quiz,
  question,
  setQuestion,
  quizes,
  answers,
  handleResult,
  error,
  setError,
  submitDisable,
}) => {
  const [state, setState] = useState(false);

  return (
    <div className={styles.quiz}>
      <h3>
        Question <span>{quiz?.id}</span>/{quizes?.length}
      </h3>

      <h4>
        <span>Q.</span>
        {quiz?.question}
      </h4>

      <h5>Choices : </h5>

      {quiz?.options?.map((option) => (
        <p
          key={`${question}_${option}`}
          onClick={() => {
            answers[question] = option;
            setState(!state);
          }}
          className={answers[question] === option ? styles.active : ''}
        >
          {option}
        </p>
      ))}

      <div className={styles.horizontal_row}></div>

      <div className={styles.buttons}>
        <button
          disabled={question === 0}
          onClick={() => {
            setQuestion(question - 1);
          }}
        >
          <i className="uil uil-previous"></i>
        </button>
        <button
          disabled={question === quizes?.length - 1}
          onClick={() => {
            setQuestion(question + 1);
          }}
        >
          <i className="uil uil-step-forward"></i>
        </button>
      </div>

      {error && (
        <div className={styles.error}>
          {error}{' '}
          <i className="uil uil-times-circle" onClick={() => setError('')}></i>
        </div>
      )}

      {question === quizes?.length - 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            className={`${styles.submit} ${
              submitDisable && styles.disabled_button
            }`}
            onClick={() => {
              handleResult();
            }}
            disabled={submitDisable}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Submit
            {submitDisable && <Spinner />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
