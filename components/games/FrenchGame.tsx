import React, { useState, useEffect } from 'react';
import { generate } from "random-words";
import translate from "translate";
import incrementUserScore from "@/components/IncrementScore";
import { useUser } from "@auth0/nextjs-auth0/client";


let  fetched: any = null
let index = 0




async function nextQuestion(){
  

  
  let test = await translate("Hello world", "fr");
  let words = generate(4)
  let question:string= words[0]
  let correct_answer:string = (await translate(words[0],'fr')).toString()
  let incorrect_answers:string[] = [(await translate(words[1],'fr')).toString(),(await translate(words[2],'fr')).toString(),(await translate(words[3],'fr'))]

        return {
            question: question,
            options: [
            correct_answer,
            incorrect_answers
            ].flat().sort(() => Math.random() - 0.5),
            answer: correct_answer
        };

}



const FrenchGame: React.FC = () => {
  const [question, setQuestion] = useState<{ question: string; options: string[]; answer: string }>({
    question: '',
    options: [],
    answer: ''
  });
  const [feedback, setFeedback] = useState<string>('');

  const { user } = useUser();

  useEffect(() => {
    const question = async () => {
   
            await generateNewQuestion()
      
        };
        
        question()
  }, []);

  async function generateNewQuestion(){
    const newQuestion = await nextQuestion();
    setQuestion(newQuestion);
    setFeedback('');
  };

  const handleOptionSelect = (selectedAnswer: string) => {
    if (selectedAnswer === question.answer) {
      setFeedback('Correct');
      if (user) {
        incrementUserScore(user);
      }
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
      <h1 className="text-lg text-forest-green mt-4 font-bold">How do you say this in French?</h1>
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
export default FrenchGame;
