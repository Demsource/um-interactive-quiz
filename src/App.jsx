import { useCallback, useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import shuffle from "./utils/shuffle";
import { v4 as uuidv4 } from "uuid";
import OneByOneQuizzes from "./components/OneByOneQuizzes";
import BulkQuizzes from "./components/BulkQuizzes";

function App() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizzIndex, setCurrentQuizzIndex] = useState(0);

  const [seconds, setSeconds] = useState(30);

  const [showQuizzesResults, setShowQuizzesResults] = useState(false);

  useEffect(() => {
    // Handle timer countdown until it reaches zero
    let timer;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    // Shuffle quizzes. Adding: selected, id and shuffled all answers fields
    const shuffledQuizzesWithSelectionAndId = shuffle(
      data.map((result) => ({
        ...result,
        selectedIdx: null,
        id: uuidv4(),
        shuffledAllAnswers: shuffle([
          result.correct_answer,
          ...result.incorrect_answers,
        ]),
      }))
    );

    setQuizzes(shuffledQuizzesWithSelectionAndId);
  }, []);

  const handleAnswerSelect = useCallback((quizzId, answerIdx) => {
    // Update quizzes state when the user selects an answer
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((prevQuizz) =>
        prevQuizz.id === quizzId
          ? { ...prevQuizz, selectedIdx: answerIdx }
          : prevQuizz
      )
    );
  }, []);

  const nextQuestion = useCallback(() => {
    // Move on to the next question until it's a last one and reset the timer
    currentQuizzIndex !== quizzes.length - 1 &&
      setCurrentQuizzIndex((prevIdx) => prevIdx + 1);
    setSeconds(30);
  }, [currentQuizzIndex, quizzes.length]);

  const submitAnswersHandler = useCallback(() => {
    // Show quizzes results and stop the timer after submitting the answers
    setShowQuizzesResults(true);
    setSeconds(0);
  }, []);

  const handleRestartQuizz = useCallback(() => {
    // Restart and reset quizz app
    setShowQuizzesResults(false);
    setSeconds(30);
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((prevQuizz) => ({ ...prevQuizz, selectedIdx: null }))
    );
    setCurrentQuizzIndex(0);
  }, []);

  return (
    <div className="interactive-quiz">
      {!showQuizzesResults ? (
        quizzes?.length && (
          <OneByOneQuizzes
            seconds={seconds}
            setSeconds={setSeconds}
            quiz={quizzes[currentQuizzIndex]}
            currentQuizNumber={currentQuizzIndex + 1}
            totalQuizzes={quizzes.length}
            handleAnswerSelect={handleAnswerSelect}
            nextQuestion={nextQuestion}
            submitAnswersHandler={submitAnswersHandler}
          />
        )
      ) : (
        <BulkQuizzes
          quizzes={quizzes}
          handleRestartQuizz={handleRestartQuizz}
        />
      )}
    </div>
  );
}

export default App;
