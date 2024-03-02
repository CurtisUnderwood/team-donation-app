import FrenchGame from '@/components/games/FrenchGame';
import Trivia from '@/components/games/Trivia';
import Head from 'next/head';
import React from 'react';

const GamePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Game - Team Earth</title>
        
      </Head>
      <FrenchGame/>
    </>
  );
};

export default GamePage;
