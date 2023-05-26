import React, { useEffect, useState } from 'react';
import styles from '../../../Styles/pages/admin/Score.module.css';

const Index = () => {
  const [category, setCategory] = useState('');
  const [scores, setScores] = useState([]);

  const getScores = async () => {
    const response = await fetch(`/api/score/${category}`);

    const json = await response.json();

    if (response.ok) {
      setScores(json);
    }
    if (!response.ok) {
      alert(json.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter category name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={getScores}>Get Score</button>
      </div>

      <div className={styles.scores}>
        {scores?.map((score) => (
          <div key={score.id} className={styles.score}>
            <h3>Name: {score.name}</h3>
            <h3>Score: {score.score}</h3>
            <h4>Year: {score.year}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
