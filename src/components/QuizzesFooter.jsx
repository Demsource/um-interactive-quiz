import React from "react";
import "./QuizzesFooter.css";
import Confetti from "react-confetti";

const QuizzesFooter = ({ quizzes, handleRestartQuiz }) => {
  // Find correct answers count from user's selected answers
  const correctAnswersCount = quizzes.reduce((accumulator, quiz) => {
    if (
      (quiz.selectedIdx === 0 || quiz.selectedIdx > 0) &&
      quiz.shuffledAllAnswers[quiz.selectedIdx] === quiz.correct_answer
    ) {
      return (accumulator += 1);
    } else {
      return accumulator;
    }
  }, 0);

  // Calculate points based on hundred-point rating scale
  const earnedPoints = (100 / quizzes.length) * correctAnswersCount;

  return (
    <>
      <footer className="quizzes-footer">
        <h3>
          You scored {correctAnswersCount} out of {quizzes.length} questions
          correctly and earned {earnedPoints} points
        </h3>
        <button className="restart-quiz" onClick={handleRestartQuiz}>
          Restart Quiz
        </button>
      </footer>
      {correctAnswersCount === quizzes.length && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </>
  );
};

export default React.memo(QuizzesFooter);
