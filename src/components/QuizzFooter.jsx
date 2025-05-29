import React from "react";
import "./QuizzFooter.css";

const QuizzFooter = ({
  currentQuizNumber,
  totalQuizzes,
  nextQuestion,
  submitAnswersHandler,
}) => {
  return (
    <footer className="quizz-footer">
      <p>
        {currentQuizNumber} of {totalQuizzes} Questions
      </p>
      {currentQuizNumber !== totalQuizzes ? (
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

export default React.memo(QuizzFooter);
