import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface Option {
  option: string;
  points: number;
}

interface Question {
  question: string;
  options: Option[];
}

export default function PrivacyRiskCalculator({ questions }: { questions: Question[] }) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResultDialog, setShowResultDialog] = useState(false);

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
      score += questions[i].options?.[selectedAnswers[i]]?.points || 0;
    }
    return score;
  };
  

  const showResults = () => {
    setShowResultDialog(true);
  };

  return (
    <div className="mx-auto flex flex-col border-2 rounded-3xl shadow-lg p-8 m-5">
      {questions.map((question: Question, questionIndex: number) => (
        <div key={questionIndex}>
          <h3 className="font-bold pt-6 pb-2">{question.question}</h3>
          {question.options.map((option: Option, answerIndex: number) => (
            <div
              key={answerIndex}
              className={`w-3/4 mx-auto flex py-4 pl-5 m-2 space-x-2 cursor-pointer rounded-xl ${
                selectedAnswers[questionIndex] === answerIndex
                  ? "border-2 border-primary bg-white/5"
                  : "border-2"
              }`}
              onClick={() => handleAnswerSelect(questionIndex, answerIndex)}
            >
              <input
                type="radio"
                className="w-6 h-6 bg-black"
                checked={selectedAnswers[questionIndex] === answerIndex}
                onChange={() => {}}
              />
              <p className="ml-6 text-left">{option.option}</p>
            </div>
          ))}
        </div>
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 items-center mx-auto text-white font-bold my-5 py-2 px-4 rounded" onClick={showResults}>
        Show Results
      </button>
      <Dialog open={showResultDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quiz Results</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <p className="text-center text-2xl ml-4 mt-6">Your score is <span className="text-primary">{calculateScore()}</span></p>
            <p>Minimum value possible: 10<br />
              Maximum value possible: 21 <br />
              <span className="italic mt-3">(NB: This is in the case where you are able to respond to each question)</span>
            </p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={() => setShowResultDialog(false)}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
