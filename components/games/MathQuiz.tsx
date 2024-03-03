import React, { useState, useEffect } from 'react';

// Get number for question
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate Question
const generateQuestion = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operations = ['+', '-', 'x'];
  const operation = operations[getRandomNumber(0, 2)];
  let answer;
  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case 'x':
      answer = num1 * num2;
      break;
    default:
      break;
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    options: [
      answer!,
      getRandomNumber(answer! - 10, answer! + 10),
      getRandomNumber(answer! - 10, answer! + 10),
      getRandomNumber(answer! - 10, answer! + 10)
    ].sort(() => Math.random() - 0.5),
    answer: answer!
  };
};

const MathQuiz: React.FC = () => {
  const [question, setQuestion] = useState<{ question: string; options: number[]; answer: number }>({
    question: '',
    options: [],
    answer: 0
  });
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    const newQuestion = generateQuestion();
    setQuestion(newQuestion);
    setFeedback('');
  };

  const handleOptionSelect = (selectedAnswer: number) => {
    if (selectedAnswer === question.answer) {
      setFeedback('Correct');
      setTimeout(() => {
        setFeedback('');
        generateNewQuestion();
      }, 1000);
    } else {
      setFeedback('Incorrect');
      setTimeout(() => {
        setFeedback('');
        generateNewQuestion();
      }, 1000);
    }
  };

  return (
    <div className="p-4 rounded-xl shadow-md w-full mx-auto text-center">
      <h1 className="text-lg text-forest-green mt-4 font-bold">Math</h1>
      <p className="text-2xl mb-4 text-forest-green font-bold">{question.question}</p>
      <div className="block">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`block my-4 mx-auto w-1/2 bg-${feedback === 'Correct' && option === question.answer ? 'green' : feedback === 'Incorrect' && option === question.answer ? 'red' : 'white'} border-forest-green text-forest-green border-2 font-bold py-2 px-4 rounded-2xl hover:bg-forest-green hover:text-white`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className={`text-center text-lg ${feedback === 'Correct' ? 'text-green-500' : 'text-red-500'}`}>{feedback}</p>}
    </div>
  );
};

export default MathQuiz;
