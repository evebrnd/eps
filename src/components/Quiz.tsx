import { useState } from "react";


export default function Quiz({ questions }: { questions: any[] }) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].answerOptions.findIndex((option: { isCorrect: any; }) => option.isCorrect)) {
        score++;
      }
    }
    return score;
  };

  const showResults = () => {
    const score = calculateScore();
    alert(`Your score is ${score} out of ${questions.length}`);
  };

  return (
    <div className="mx-auto flex flex-col">
      {questions.map((question: any, questionIndex: number) => (
        <div key={questionIndex}>
          <h3 className="font-bold pt-6 pb-2">{question.question}</h3>
          {question.answerOptions.map((answer: any, answerIndex: number) => (
            <div
              key={answerIndex}
              className={`w-3/4 mx-auto flex py-4 pl-5 m-2 space-x-2 border-2 cursor-pointer ${selectedAnswers[questionIndex] === answerIndex
                ? "bg-white/5 border-white/10"
                : ""
                } rounded-xl`}
              onClick={() => handleAnswerSelect(questionIndex, answerIndex)}
            >
              <input
                type="radio"
                className="w-6 h-6 bg-black"
                checked={selectedAnswers[questionIndex] === answerIndex}
                onChange={() => { }}
              />
              <p className="ml-6">{answer.answer}</p>
            </div>
          ))}
        </div>
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 items-center mx-auto text-white font-bold my-5 py-2 px-4 rounded" onClick={showResults}>
        Show Results
      </button>
    </div>
  );
}
