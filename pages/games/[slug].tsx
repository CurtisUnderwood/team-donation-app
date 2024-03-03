import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MemoryMatchGame from '@/components/games/MemoryMatchGame';
import MathQuiz from '@/components/games/MathQuiz';
import FrenchGame from '@/components/games/FrenchGame';
import Trivia from '@/components/games/Trivia';
import SyntaxSprint from '@/components/games/SyntaxSprint';
import Timeline from '@/components/games/Timeline';
import Head from 'next/head';
import Image from 'next/image'

const GamePage = () => {
  const router = useRouter();
  const { slug } = router.query;

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

  return (
    <main className="flex justify-center items-start">
    <Head>
      <title>TeamEarth</title>
    </Head>
    <div className="md:grid grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto px-4">
      {/* Left Column */}
      <div className="text-forest-green font-poppins text-center col-span-1 flex flex-col items-center">
        <div className="w-full bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-bold mb-2">Your Trees Planted</h2>
          <p className="text-4xl font-bold">100</p>
        </div>
        <div className="w-full bg-white rounded-lg p-4 shadow-md mt-4">
          <h2 className="text-lg font-bold mb-2">Global Trees Planted</h2>
          <p className="text-4xl font-bold">100</p>
        </div>
      </div>

      {/* Middle Column */}
      <div className="col-span-1">
        <Fragment>{gameComponent}</Fragment>
      </div>

      {/* Right Column */}
      <div className="col-span-1">
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} />
        <Image src="/block-336-280.png" alt="Block" width={336} height={280} className='mt-4' />
      </div>
    </div>
  </main>
  );
};

export default GamePage;
