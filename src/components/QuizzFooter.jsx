import "./QuizzFooter.css";

const QuizzFooter = ({
  currentQuizzNumber,
  totalQuizzes,
  nextQuestion,
  submitAnswersHandler,
}) => {
  return (
    <footer className="quizz-footer">
      <p>
        {currentQuizzNumber} of {totalQuizzes} Questions
      </p>
      {currentQuizzNumber !== totalQuizzes ? (
        <button className="next-and-submit" onClick={nextQuestion}>
          Next
        </button>
      ) : (
        <button
          className="next-and-submit"
          style={{ width: "40%" }}
          onClick={submitAnswersHandler}
        >
          Submit Answers
        </button>
      )}
    </footer>
  );
};

export default QuizzFooter;
