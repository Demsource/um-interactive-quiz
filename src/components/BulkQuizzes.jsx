import "./BulkQuizzes.css";
import QuestionWithAnswers from "./QuestionWithAnswers";
import QuizzesFooter from "./QuizzesFooter";
import QuizzHeader from "./QuizzHeader";

const BulkQuizzes = ({ quizzes, handleRestartQuizz }) => {
  return (
    <section className="bulk-quizzes">
      <QuizzHeader />
      <div className="question-with-answers">
        {quizzes.map((quizz, i) => (
          <QuestionWithAnswers
            key={i}
            currentQuizzNumber={i + 1}
            quizz={quizz}
            BulkQuizzes
          />
        ))}
      </div>
      <div className="divider"></div>
      <QuizzesFooter
        quizzes={quizzes}
        handleRestartQuizz={handleRestartQuizz}
      />
    </section>
  );
};

export default BulkQuizzes;
