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
            <GameBox title="MEMORY MATCH MAYHEM" imageSrc="/logo1.png" color="light-green" />
            <GameBox title="TOTAL TRIVIA TRIUMPH" imageSrc="/logo2.png" color="light-blue"/>
            <GameBox title="MATH MASTERY MISSION" imageSrc="/logo3.png" color="light-purple"/>
            <GameBox title="MATH MASTERY MISSION" imageSrc="/logo3.png" color="light-green"/>
            <GameBox title="MATH MASTERY MISSION" imageSrc="/logo3.png" color="light-blue"/>
            <GameBox title="MATH MASTERY MISSION" imageSrc="/logo3.png" color="light-purple"/>
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
