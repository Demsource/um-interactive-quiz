import "./QuizzesFooter.css";

const QuizzesFooter = ({ quizzes, handleRestartQuizz }) => {
  // Find correct answers count from user's selected answers
  const correctAnswersCount = quizzes.reduce((accumulator, quizz) => {
    if (
      (quizz.selectedIdx === 0 || quizz.selectedIdx > 0) &&
      quizz.shuffledAllAnswers[quizz.selectedIdx] === quizz.correct_answer
    ) {
      return (accumulator += 1);
    } else {
      return accumulator;
    }
  }, 0);

  // Calculate points based on hundred-point rating scale
  const earnedPoints = (100 / quizzes.length) * correctAnswersCount;

  return (
    <footer className="quizzes-footer">
      <h3>
        You scored {correctAnswersCount} out of {quizzes.length} questions
        correctly and earned {earnedPoints} points
      </h3>
      <button className="restart-quizz" onClick={handleRestartQuizz}>
        Restart Quizz
      </button>
    </footer>
  );
};

export default QuizzesFooter;
