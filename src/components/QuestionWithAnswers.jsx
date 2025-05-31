import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./QuestionWithAnswers.css";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";

const QuestionWithAnswers = ({
  currentQuizNumber,
  quiz,
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
        {currentQuizNumber}. {quiz.question}
      </h3>
      <div className="answer-btns">
        {quiz.shuffledAllAnswers.map((answer, i) => {
          let answerButtonClass;
          let answerIcon;

          if (!BulkQuizzes) {
            // If quizzes is not submitted style selected answer
            if (quiz.selectedIdx === i) {
              answerButtonClass = "user-answer";
            }
          } else {
            if (
              quiz.shuffledAllAnswers[quiz.selectedIdx] &&
              answer === quiz.correct_answer
            ) {
              // If quizzes is submitted and user has answered to a quiz, style correct answer
              // set respective answer icon
              answerButtonClass = "correct";
              answerIcon = <FontAwesomeIcon icon={faCircleCheck} />;
            }
            if (
              quiz.shuffledAllAnswers[quiz.selectedIdx] === answer &&
              answer !== quiz.correct_answer
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
              style={
                BulkQuizzes
                  ? { display: "flex" }
                  : { display: "block", color: "black" }
              }
              onClick={() =>
                handleAnswerSelect && handleAnswerSelect(quiz.id, i)
              }
              disabled={BulkQuizzes ? true : false}
            >
              {answer} {BulkQuizzes && answerIcon}
            </button>
          );
        })}
      </div>
      {BulkQuizzes &&
        (quiz.selectedIdx === 0 || quiz.selectedIdx > 0 ? (
          <div className="explanation-wrapper">
            <div
              className={`explanation-btn ${
                openExplanation ? "explanation-open-btn" : ""
              }`}
              onClick={handleShowHideExplanation}
            >
              Why is it correct?
            </div>
            {openExplanation && (
              <div className="explanation">{quiz.explanation}</div>
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

export default React.memo(QuestionWithAnswers);
