import React, { useState, useEffect } from 'react';

interface FlipScoreboardProps {
  number: number;
}

const FlipScoreboard: React.FC<FlipScoreboardProps> = ({ number }) => {
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayNumber < number) {
        setDisplayNumber(displayNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [number, displayNumber]);

  const numberStr = displayNumber.toString().padStart(number.toString().length, '0');

  return (
    <div className="flex justify-center items-center">
      {numberStr.split('').map((digit, index) => (
        <div key={index} className="mx-1 p-4 shadow-md bg-white text-forest-green rounded-md text-6xl font-bold w-20">
          {digit}
        </div>
      ))}
    </div>
  );  
};

export default FlipScoreboard;
