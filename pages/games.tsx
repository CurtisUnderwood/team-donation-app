import Head from 'next/head';
import React from 'react';
import GameBox from '../components/GameBox';
import Top10Leaderboard from '../components/Top10Leaderboard';

const GamesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Games - Team Earth</title>
      </Head>
      <div className="m-10 mx-40 flex">
        {/* Left Column */}
        <div className="w-3/4 mx-6">
          <h2 className="text-4xl font-bold mb-4 text-forest-green">All Games</h2>
          <div className="grid grid-cols-2 gap-6 font-poppins">
            <GameBox title="MEMORY MATCH MAYHEM" color="#8096CF" imageSrc="/logo1.png" path="/games/memory-match"/>
            <GameBox title="TOTAL TRIVIA TRIUMPH" color="#C480CF" imageSrc="/logo2.png" path="/games/trivia"/>
            <GameBox title="MATH MASTERY MISSION"  color="#B1CF80"imageSrc="/logo3.png" path="/games/math-quiz"/>
            <GameBox title="TIMELINE TRIVIA TREK"  color="#F99A86"imageSrc="/logo3.png" path="/games/timeline"/>
            <GameBox title="SPEEDY SYNTAX SPRINT" color="#F8A85F" imageSrc="/logo3.png" path="/games/memory-match"/>
            <GameBox title="FRENCH FLASHCARD FRENZY" color="#FFE459"  imageSrc="/logo3.png" path="/games/memory-match"/>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-1/4">
          <Top10Leaderboard />
        </div>
      </div>
    </>
  );
};

export default GamesPage;
