import "./OneByOneQuizzes.css";
import { useEffect } from "react";
import QuizzHeader from "./QuizzHeader";
import QuestionWithAnswers from "./QuestionWithAnswers";
import QuizzFooter from "./QuizzFooter";

const OneByOneQuizzes = ({
  seconds,
  setSeconds,
  quizz,
  currentQuizzNumber,
  totalQuizzes,
  handleAnswerSelect,
  nextQuestion,
  submitAnswersHandler,
}) => {
  useEffect(() => {
    // When the timer ends, update it and move on to the next question, if it is the last one, submit answers
    if (seconds === 0) {
      if (currentQuizzNumber !== totalQuizzes) {
        nextQuestion();
        setSeconds(30);
      } else {
        submitAnswersHandler();
      }
    }
  }, [seconds]);

  return (
    <section className="one-by-one-quizzes">
      <QuizzHeader seconds={seconds} hasTimer />
      <div
        className="progress-bar"
        style={{
          width: `calc((100% / ${totalQuizzes} * ${currentQuizzNumber}) + 20px)`,
        }}
      ></div>
      <QuestionWithAnswers
        currentQuizzNumber={currentQuizzNumber}
        quizz={quizz}
        handleAnswerSelect={handleAnswerSelect}
      />
      <div className="divider"></div>
      <QuizzFooter
        currentQuizzNumber={currentQuizzNumber}
        totalQuizzes={totalQuizzes}
        nextQuestion={nextQuestion}
        submitAnswersHandler={submitAnswersHandler}
      />
    </section>
  );
};

export default OneByOneQuizzes;
