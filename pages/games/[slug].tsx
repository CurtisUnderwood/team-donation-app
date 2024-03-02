import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MemoryMatchGame from '../../components/games/MemoryMatchGame';
import MathQuiz from '../../components/games/MathQuiz';
import Head from 'next/head';

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
    default:
      gameComponent = <div>Game not found</div>;
  }

  return (
    <main>
      <Head>
        <title>TeamEarth</title>
      </Head>
    <div className='mt-6'>
        <Fragment>{gameComponent}</Fragment>
    </div>
    </main>
  );
};

export default GamePage;
