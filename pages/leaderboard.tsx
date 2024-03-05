import Head from 'next/head';
import React from 'react';
import Leaderboard from '@/components/Leaderboard';
import Image from 'next/image';

const LeaderboardPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Games - GameTrees</title>
      </Head>
      <div className="m-10 md:mx-40 md:flex min-w-[360px] ">
        {/* Left Column */}
        <div className="md:w-3/4 mx-6">
          <h2 className="text-4xl font-bold mb-4 text-forest-green">Leaderboard</h2>
          <Leaderboard />
        </div>
        {/* Right Column */}
        <div className="md:mt-0 mt-4 md:w-1/4 min-w-[260px] mx-auto ">
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} className="mx-auto mt-2 rounded-xl" />
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} className="mx-auto mt-2 rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
