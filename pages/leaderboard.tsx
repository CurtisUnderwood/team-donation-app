import Head from 'next/head';
import React from 'react';
import Leaderboard from '../components/Leaderboard';
import SquareAd from '@/components/SquareAd';

const LeaderboardPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Games - Team Earth</title>
      </Head>
      <div className="m-10 mx-40 flex">
        {/* Left Column */}
        <div className="w-3/4 mx-6">
          <h2 className="text-4xl font-bold mb-4 text-forest-green">Leaderboard</h2>
          <Leaderboard />
        </div>
        {/* Right Column */}
        <div className="w-1/4">
          <SquareAd />
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
