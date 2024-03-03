import Head from 'next/head';
import React from 'react';
import GameBox from '@/components/GameBox';
import Top10Leaderboard from '@/components/Top10Leaderboard';
import Image from 'next/image'

const GamesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Games - Team Earth</title>
      </Head>
      <div className="m-10 mx-40 md:flex">
        {/* Left Column */}
        <div className="sm:w-full w-3/4 mx-6">
          <h2 className="text-4xl font-bold mb-4 text-forest-green">All Games</h2>
          <div className="md:grid grid-cols-2 gap-6 font-poppins">
            <GameBox title="MEMORY MATCH MAYHEM" color="#8096CF" imageSrc="/tree_memory.png" path="/games/memory-match"/>
            <GameBox title="TOTAL TRIVIA TRIUMPH" color="#C480CF" imageSrc="/tree_trivia.png" path="/games/trivia"/>
            <GameBox title="MATH MASTERY MISSION"  color="#B1CF80"imageSrc="/tree_math.png" path="/games/math-quiz"/>
            <GameBox title="SPEEDY SYNTAX SPRINT" color="#F8A85F" imageSrc="/tree_typin.png" path="/games/syntax"/>
            <GameBox title="FRENCH FLASHCARD FRENZY" color="#FFE459"  imageSrc="/tree_honhon.png" path="/games/french-quiz"/>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-1/4">
          <Top10Leaderboard />
          <Image src="/block-336-280.png" alt="Block" width={336} height={280} className="mx-auto mt-2 rounded-xl min-w-[260px] " />
        </div>
      </div>
    </>
  );
};

export default GamesPage;
