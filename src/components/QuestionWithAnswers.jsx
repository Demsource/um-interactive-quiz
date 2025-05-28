import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./QuestionWithAnswers.css";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const QuestionWithAnswers = ({
  currentQuizzNumber,
  quizz,
  handleAnswerSelect,
  BulkQuizzes,
}) => {
  const [openExplanation, setOpenExplanation] = useState(false);

  const handleShowHideExplanation = () => {
    setOpenExplanation((prevState) => !prevState);
  };

  return (
    <main>
      <h3>
        {currentQuizzNumber}. {quizz.question}
      </h3>
      <div className="answer-btns">
        {quizz.shuffledAllAnswers.map((answer, i) => {
          let answerButtonClass;
          let answerIcon;

          if (!BulkQuizzes) {
            // If quizzes is not submitted style selected answer
            if (quizz.selectedIdx === i) {
              answerButtonClass = "user-answer";
            }
          } else {
            if (
              quizz.shuffledAllAnswers[quizz.selectedIdx] &&
              answer === quizz.correct_answer
            ) {
              // If quizzes is submitted and user has answered to a quiz, style correct answer
              // set respective answer icon
              answerButtonClass = "correct";
              answerIcon = <FontAwesomeIcon icon={faCircleCheck} />;
            }
            if (
              quizz.shuffledAllAnswers[quizz.selectedIdx] === answer &&
              answer !== quizz.correct_answer
            ) {
              // If quizzes is submitted, find selected answer in the answers list,
              // and if it does not matches the correct answer style user's selected incorrect answer
              // set respective answer icon
              answerButtonClass = "incorrect";
              answerIcon = <FontAwesomeIcon icon={faCircleXmark} />;
            }
          }

          return (
            <button
              key={i}
              className={answerButtonClass}
              style={BulkQuizzes ? { display: "flex" } : { display: "block" }}
              onClick={() =>
                handleAnswerSelect && handleAnswerSelect(quizz.id, i)
              }
              disabled={BulkQuizzes ? true : false}
            >
              {answer} {BulkQuizzes && answerIcon}
            </button>
          );
        })}
      </div>
      {BulkQuizzes &&
        (quizz.selectedIdx === 0 || quizz.selectedIdx > 0 ? (
          <div className="explanation-wrapper">
            <div
              className="explanation-btn"
              onClick={handleShowHideExplanation}
            >
              Why is it correct?
            </div>
            {openExplanation && (
              <div className="explanation">{quizz.explanation}</div>
            )}
          </div>
        ) : (
          <div className="unanswered-note">
            You have to answer a question in order to see it's explanation
          </div>
        ))}
    </main>
  );
};

export default QuestionWithAnswers;
