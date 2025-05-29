import "./OneByOneQuizzes.css";
import React, { useEffect, useMemo } from "react";
import QuizzHeader from "./QuizzHeader";
import QuestionWithAnswers from "./QuestionWithAnswers";
import QuizzFooter from "./QuizzFooter";

const OneByOneQuizzes = ({
  seconds,
  quiz,
  currentQuizNumber,
  totalQuizzes,
  handleAnswerSelect,
  nextQuestion,
  submitAnswersHandler,
}) => {
  useEffect(() => {
    // When the timer ends, update it and move on to the next question, if it is the last one, submit answers
    if (seconds === 0) {
      if (currentQuizNumber !== totalQuizzes) {
        nextQuestion();
      } else {
        submitAnswersHandler();
      }
    }
  }, [
    seconds,
    currentQuizNumber,
    totalQuizzes,
    nextQuestion,
    submitAnswersHandler,
  ]);

  const progressBarStyle = useMemo(() => {
    return {
      width: `calc((100% / ${totalQuizzes} * ${currentQuizNumber}) + 20px)`,
    };
  }, [totalQuizzes, currentQuizNumber]);

  return (
    <section className="one-by-one-quizzes">
      <QuizzHeader seconds={seconds} hasTimer />
      <div className="progress-bar" style={progressBarStyle}></div>
      <QuestionWithAnswers
        currentQuizNumber={currentQuizNumber}
        quiz={quiz}
        handleAnswerSelect={handleAnswerSelect}
      />
      <div className="divider"></div>
      <QuizzFooter
        currentQuizNumber={currentQuizNumber}
        totalQuizzes={totalQuizzes}
        nextQuestion={nextQuestion}
        submitAnswersHandler={submitAnswersHandler}
      />
    </section>
  );
};

export default React.memo(OneByOneQuizzes);
