import React, { useState, useEffect } from "react";
import Question from "../../Components/quiz/Question";
import styles from "../../Styles/pages/quiz/Quiz.module.css";
import formStyles from "../../Styles/pages/signup/Signup.module.css";
import instructionStyle from "../../Styles/components/Instruction.module.css";
import { useUserContext } from "../../hooks/useUserContext";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Dialog from "../../Components/Dialog";
import Spinner from "../../Components/Spinner";

const FormComponent = ({ setStartExam, form, setForm, setStartTime }) => {
  const [error, setError] = useState("");
  const [disableSignup, setDisableSignup] = useState(false);

  const [password, setPassword] = useState("");

  const handleCheckPassword = async () => {
    if (password === "continue") {
      setForm(false);
      setStartExam(true);
      setStartTime(Date.now().toString());
    } else {
      setDisableSignup(false);
      return setError("Password does not matches");
    }
  };

  return (
    <>
      {form && (
        <div className={formStyles.container} style={{ marginTop: "-40px" }}>
          <div className={formStyles.form} style={{ marginTop: "150px" }}>
            <h2>Survey</h2>

            <div className={instructionStyle.instruction_box}>
              <h4>Instruction for Survey</h4>
              <p>
                <b>
                  1&#41; .Please don't reload your page while attempting
                  quizzes.
                </b>
              </p>
              <div className={instructionStyle.submit}>
                2&#41;<div className={instructionStyle.submitted}></div>{" "}
                <p>will indicate reacted question</p>
              </div>
              <div className={instructionStyle.submit}>
                3&#41;<div className={instructionStyle.incomplete}></div>{" "}
                <p>will indicate un reacted question</p>
              </div>
            </div>

            <div>
              <h4>Type Continue To Start Survey</h4>
              <div className={formStyles.field}>
                <b>Enter *</b>
                <input
                  type="text"
                  placeholder="Type continue"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className={styles.error}>
                  {error}{" "}
                  <i
                    className="uil uil-times-circle"
                    onClick={() => setError("")}
                  ></i>
                </div>
              )}
              <button
                onClick={handleCheckPassword}
                disabled={disableSignup}
                className={disableSignup ? styles.disabled_button : ""}
              >
                {disableSignup ? (
                  <>
                    {" "}
                    Start Survey <Spinner />
                  </>
                ) : (
                  "Start Survey"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Index = () => {
  const navigate = useNavigate();

  const { userData } = useUserContext();

  const [startTime, setStartTime] = useState("");

  const [quizes, setQuizes] = useState();

  const [question, setQuestion] = useState(0);

  const [answers, setAnswers] = useState();

  const [error, setError] = useState("");

  const [liveError, setLiveError] = useState("");
  const [p, setP] = useState("");
  const [startExam, setStartExam] = useState(false);

  const [form, setForm] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const [submitDisable, setSubmitDisable] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setError("");
    console.log("Hello Guys");
    window.scrollTo(0, 0);
    const getQuestions = async () => {
      const response = await fetch(`http://localhost:4000/api/quizzes/survey`, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setQuizes(json.quizzes);
        setForm(true);
        setAnswers(Array.from({ length: json?.quizzes?.length }));
        console.log(Array.from({ length: json?.quizzes?.length }));
        setLoading(false);
      }
      console.log(quizes);
    };
    if (userData) {
      getQuestions();
    }
  }, [userData, pathname]);

  // Check result and save to backend
  const handleResult = async () => {
    setSubmitDisable(true);
    setError("");
    let score = 0;

    quizes.map((quiz) => {
      if (!answers[quiz.id - 1]) {
        setError("Please attempt all the questions!");
        return setSubmitDisable(false);
      }
      if (quiz.answer === answers[quiz.id - 1]) {
        score++;
      }
    });

    if (answers.includes(undefined)) {
      return setSubmitDisable(false);
    }

    const date = Date.now().toString();
    const response = await fetch(`http://localhost:4000/api/score/survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userData._id,
        name: userData.name,
        score: score,
        submittedAt: date,
        startedAt: startTime,
        year: userData.year,
        email: userData.email,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setOpenDialog(true);

      setTimeout(() => {
        setOpenDialog(false);
        navigate("/profile");
      }, 3000);
    }
    if (!response.ok) {
      console.log(json.error);
    }
  };

  return (
    <div className={styles.container}>
      {liveError && (
        <div
          className={`${styles.quizes_container} ${styles.error_box}`}
          style={{ margin: "150px 10px", marginBottom: "100px" }}
        >
          <div>
            <h3>{liveError}</h3>
            {p && <p>{p}</p>}
            <button onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>
      )}

      {loading ? (
        <h2
          style={{
            margin: "200px 10px 150px",
            color: "#333",
            textAlign: "center",
            fontWeight: "300",
          }}
        >
          Loading Survey, Please wait!
        </h2>
      ) : (
        <>
          <FormComponent
            setStartExam={setStartExam}
            form={form}
            setForm={setForm}
            setStartTime={setStartTime}
          />

          <>
            {startExam && (
              <div className={styles.quizes_container}>
                <h2>Survey</h2>

                <div className={styles.all_questions}>
                  {answers?.map((answer, index) => (
                    <div
                      className={`${styles.question_box} ${
                        answer ? styles.done : ""
                      }`}
                      onClick={() => setQuestion(index)}
                      key={`${index}_${answers}`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>

                <Question
                  quiz={quizes[question]}
                  question={question}
                  setQuestion={setQuestion}
                  quizes={quizes}
                  answers={answers}
                  handleResult={handleResult}
                  error={error}
                  setError={setError}
                  submitDisable={submitDisable}
                  setSubmitDisable={setSubmitDisable}
                />
              </div>
            )}
          </>

          <Dialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            title={`Exam Submitted`}
            children={
              <div>
                <p>You exam for Survey is submitted successfully!</p>
                <p>ThankYou for your Response</p>
                <button className={styles.button}>
                  <Link to="/profile" style={{ color: "white" }}>
                    Go To Profile
                  </Link>
                </button>
              </div>
            }
          />
        </>
      )}
    </div>
  );
};

export default Index;
