import React, { useState, useEffect } from 'react';
import { generate } from "random-words";
import incrementUserScore from "@/components/IncrementScore";
import { useUser } from "@auth0/nextjs-auth0/client";

let countdown= false
let wpm = 0

const SyntaxSprint: React.FC = () => {

  const { user } = useUser();

  function randomWord(){
    const word = document.getElementById('word')!
    let newWord = generate(1)
    word.innerText = newWord[0]

  }

  const checkInput = (e:any) => {
    const word = document.getElementById('word')!
 
    if (word.textContent === e.target.value){
      randomWord()
      e.target.value = ""
      wpm += 1
    }
  }

  function start(){
    if (!countdown){
      countdown = true
    }
  }
  function tickEverySecond() {
    if(countdown){
      const timer = document.getElementById('timer')!

      let time = Number(timer.innerText)
      time -= 1
      timer.innerText = time.toString()

      if (time == 0){
        countdown = false
        finish()
      }

    }
  }

  function finish(){
    const timer = document.getElementById('timer')!
    const word = document.getElementById('word')!
    const input = document.getElementById('input')!

    timer.remove()
    word.remove()
    input.remove()

    //increment user score
    if (user) {
      incrementUserScore(user);
    }


    const wpmParagraph: HTMLParagraphElement = document.createElement("p");
    wpmParagraph.textContent = "Your words per minute is " + wpm;
    wpmParagraph.className='text-xl'
    
    const tryAgain: HTMLButtonElement = document.createElement("button");
    tryAgain.className="bg-forest-green border-2 mt-6 text-white font-bold py-3 px-10 rounded-3xl hover:bg-white hover:text-forest-green"
    if (tryAgain) {
      tryAgain.onclick = function() {
          location.reload()
      };
  }
    tryAgain.textContent = "Try again";
    
    
    
    const div = document.getElementById('div')!
    div.appendChild(wpmParagraph);
    div.appendChild(tryAgain);


  }

  useEffect(() => {
    randomWord()

      const intervalId = setInterval(tickEverySecond, 1000);

       return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='div' className='w-1/2 p-4 mx-auto text-center'>
      <h1 id='timer' className=' mx-auto h-[60px] w-[60px] rounded-full border-black border-8 text-center font-bold text-3xl align-middle my-4'>60</h1>
      <h1 id='word' className='text-2xl my-1.5 font-poppins text-forest-green'>Words</h1>
      <input autoComplete="off" className='w-full p-4 border-2 border-light-green rounded-2xl mx-auto text-center font-poppins' id='input' onClick={start} onChange={(e) => checkInput(e)}/>
      </div>
  );
};
export default SyntaxSprint;
