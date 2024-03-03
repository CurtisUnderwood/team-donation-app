import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-light-green w-1/3 mx-auto p-8 text-white font-poppins text-left rounded-xl">
        <h2 className='text-3xl font-bold mb-2'>Play</h2>
        <p>Immerse yourself in entertaining web games that challenge your skills and engage your mind while you play.</p>
      </div>
      <div className="bg-light-blue w-1/3 mx-auto p-8 text-white font-poppins text-left rounded-xl">
        <h2 className='text-3xl font-bold mb-2'>Plant</h2>
        <p>While you game, we donate all revenue you earn to the Arbor Day Foundation each month, helping to plant trees and protect our planet for future generations.</p>
      </div>
      <div className="bg-light-purple w-1/3 mx-auto p-8 text-white font-poppins text-left rounded-xl">
        <h2 className='text-3xl font-bold mb-2'>Rank</h2>
        <p>Compete against friends and fellow players to plant the most trees, earn bragging rights, and become a champion for nature.</p>
      </div>
    </div>
  );
};

export default About;
