import React, { useState, useEffect } from 'react';
import incrementUserScore from "@/components/IncrementScore";
import { useUser } from "@auth0/nextjs-auth0/client";

let  fetched: any = null
let index = 0

function decodeHtml(html : any) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

async function loadQuestion(){
    const triviaURL = 'https://opentdb.com/api.php?amount=10&difficulty=easy'
    const result = await fetch(`${triviaURL}`)
    fetched = await result.json()

}


async function nextQuestion(){
    if (fetched == null || index == 9){
        await loadQuestion()
        index = 0
    }
    if (fetched.response_code == 0) {
        const data = fetched.results[index]
        

        let question : string = data.question
        question = decodeHtml(question)
        let correct_answer : string = data.correct_answer
        correct_answer = decodeHtml(correct_answer)
        let incorrect_answers : string[] = data.incorrect_answers


        let i = 0
        while (i < incorrect_answers.length) {
            incorrect_answers[i] = decodeHtml(incorrect_answers[i])
            i++;
        }



        index += 1
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
        return nextQuestion()
    }
}



const Trivia: React.FC = () => {
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
    <div className="p-4 rounded-xl shadow-md w-full mx-auto text-center border">
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
