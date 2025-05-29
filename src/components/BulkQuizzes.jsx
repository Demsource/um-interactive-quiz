import React from "react";
import "./BulkQuizzes.css";
import QuestionWithAnswers from "./QuestionWithAnswers";
import QuizzesFooter from "./QuizzesFooter";
import QuizzHeader from "./QuizzHeader";

const BulkQuizzes = ({ quizzes, handleRestartQuiz }) => {
  return (
    <section className="bulk-quizzes">
      <QuizzHeader />
      <div className="question-with-answers">
        {quizzes.map((quiz, i) => (
          <QuestionWithAnswers
            key={quiz.id}
            currentQuizNumber={i + 1}
            quiz={quiz}
            BulkQuizzes
          />
        ))}
      </div>
      <div className="divider"></div>
      <QuizzesFooter
        quizzes={quizzes}
        handleRestartQuiz={handleRestartQuiz}
      />
    </section>
  );
};

export default React.memo(BulkQuizzes);
