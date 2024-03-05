import { useRouter } from 'next/router';
import { Fragment } from 'react';
import React, { useEffect } from "react";
import MemoryMatchGame from '@/components/games/MemoryMatchGame';
import MathQuiz from '@/components/games/MathQuiz';
import FrenchGame from '@/components/games/FrenchGame';
import Trivia from '@/components/games/Trivia';
import SyntaxSprint from '@/components/games/SyntaxSprint';
import Timeline from '@/components/games/Timeline';
import Head from 'next/head';
import Image from 'next/image'
import { useUser } from "@auth0/nextjs-auth0/client";
import getScore from "../../components/GetScore";
import { useState } from "react";
import fetchFirestoreData from "../../components/GetAllUsers";
import Link from 'next/link';
import GameBox from '@/components/GameBox';

const GamePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchFirestoreData();
      const totalTrees = fetchedData.reduce((acc, curr) => {
        return acc + Number(curr.treesPlanted);
      }, 0);
      setTotalScore(Number(totalTrees.toFixed(0)));
    };
    fetchData();
  }, []);

  let gameComponent;

  switch (slug) {
    case 'memory-match':
      gameComponent = <MemoryMatchGame />;
      break;
    case 'math-quiz':
      gameComponent = <MathQuiz />;
    break;
    case 'trivia':
      gameComponent = <Trivia />;
      break;
    case 'french-quiz':
      gameComponent = <FrenchGame />;
      break;
    case 'syntax':
      gameComponent = <SyntaxSprint />;
    break;
    case 'timeline':
      gameComponent = <Timeline />;
    break;
    default:
      gameComponent = <div>Game not found</div>;
  }

    // Function to capitalize the first letter of each word and remove hyphens
    const formatSlug = (slug: string | undefined): string => {

      const slugFetched = slug || '';

      const words = slugFetched.split('-');
  
      const formattedSlug = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
      return formattedSlug;
    };

  const [userScore, setUserScore] = useState(0);

  const { user } = useUser();

  if (user) {
    getScore(user)
      .then((score) => {
        setUserScore(Number(score));
      })
      .catch((error) => {
        console.error("Error fetching user score:", error);
      });
  }

  return (
    <main>
    <Head>
      <title>TeamEarth</title>
    </Head>

      {/* Title section */}
      <div className="text-center font-poppins text-forest-green mt-6">
      <div className="md:grid grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto px-4">
        <div className="col-span-1 mb-4 md:mb-0 md:flex">
          <Link href="/games">
            <button className='bg-forest-green text-white font-bold p-2 px-6 rounded-full border-2 border-forest-green hover:bg-white hover:text-forest-green'>Back</button>
          </Link>
        </div>
        <h2 className="col-span-1 font-bold text-3xl text-center">{formatSlug(slug as string)}</h2>
      </div>
    </div>

    <div className="md:grid grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto px-4">
      {/* Left Column */}
      <div className="text-forest-green font-poppins text-center col-span-1 flex flex-col items-center">
        <div className="w-full bg-white rounded-lg p-4 shadow-md border">
          <h2 className="text-lg font-bold mb-2">Your Trees Planted</h2>
          <p className="text-4xl font-bold">{userScore.toFixed(2)}</p>
        </div>
        <div className="w-full bg-white rounded-lg p-4 shadow-md mt-4 border">
          <h2 className="text-lg font-bold mb-2">Global Trees Planted</h2>
          <p className="text-4xl font-bold">{totalScore.toFixed(2)}</p>
        </div>
      </div>

      {/* Middle Column */}
      <div className="col-span-1 md:mt-0 mt-4">
        <Fragment>{gameComponent}</Fragment>
      </div>

      {/* Right Column */}
      <div className="col-span-1 mt-6 md:mt-0">
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} className='rounded-md mx-auto' />
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} className='my-4 rounded-md mx-auto' />
      </div>
    </div>


    <div className='mx-20 mt-8'>
    <h2 className='font-poppins text-forest-green text-xl text-center font-bold'>Featured Games</h2>
      <div className="md:flex justify-center gap-6 mb-16">
          <GameBox
            title="MEMORY MATCH MAYHEM"
            imageSrc="/tree_memory.png"
            path="/games/memory-match"
            color="#8096CF"
          />
          <GameBox
            title="TOTAL TRIVIA TRIUMPH"
            imageSrc="/tree_trivia.png"
            path="/games/trivia"
            color="#C480CF"
          />
          <GameBox
            title="FRENCH FLASHCARD FRENZY"
            imageSrc="/tree_honhon.png"
            path="/games/french-quiz"
            color="#B1CF80"
          />
        </div>
    </div>
  </main>
  );
};

export default GamePage;
