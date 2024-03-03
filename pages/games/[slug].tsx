import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MemoryMatchGame from '../../components/games/MemoryMatchGame';
import MathQuiz from '../../components/games/MathQuiz';
import FrenchGame from '../../components/games/FrenchGame';
import Trivia from '../../components/games/Trivia';
import SyntaxSprint from '../../components/games/SyntaxSprint';
import Timeline from '../../components/games/Timeline';
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
