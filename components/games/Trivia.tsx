import React, { useState, useEffect } from 'react';


async function loadQuestion(){
    const triviaURL = 'https://opentdb.com/api.php?amount=10&difficulty=easy'
    const result = await fetch(`${triviaURL}`)
    const fetched = await result.json()

    if (fetched.response_code == 0) {
        const data = fetched.results[0]
        

        
    
        console.log(data)
        let question : string = data.question
        let correct_answer : string = data.correct_answer
        let incorrect_answers : string[] = data.incorrect_answers
        let type : string[] = data.type

        return {
            question: question,
            options: [
            correct_answer,
            incorrect_answers
            ].flat().sort(() => Math.random() - 0.5),
            answer: correct_answer
        };
    }else{
        setTimeout(() => {
          }, 5000);
        return loadQuestion()
    }
}

function nextQuestion(){

}



const Trivia: React.FC = () => {
  const [question, setQuestion] = useState<{ question: string; options: string[]; answer: string }>({
    question: '',
    options: [],
    answer: ''
  });
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    const question = async () => {
   
            await generateNewQuestion()
      
        };
        
        question()
  }, []);

  async function generateNewQuestion(){
    const newQuestion = await loadQuestion();
    setQuestion(newQuestion);
    setFeedback('');
  };

  const handleOptionSelect = (selectedAnswer: string) => {
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
    <div className="p-4 rounded-xl shadow-md w-1/4 mx-auto">
      <h1 className="text-lg text-forest-green mt-4 font-bold">Trivia</h1>
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
export default Trivia;
