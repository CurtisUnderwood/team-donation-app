import React, { useState, useEffect } from 'react';
import incrementUserScore from "@/components/IncrementScore";
import { useUser } from "@auth0/nextjs-auth0/client";

type Card = {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
};

const initialCards: Card[] = [
    { id: 1, value: '/memory-game/tree1.png', flipped: false, matched: false },
    { id: 2, value: '/memory-game/tree2.png', flipped: false, matched: false },
    { id: 3, value: '/memory-game/tree3.png', flipped: false, matched: false },
    { id: 4, value: '/memory-game/tree4.png', flipped: false, matched: false },
    { id: 5, value: '/memory-game/tree5.png', flipped: false, matched: false },
    { id: 6, value: '/memory-game/tree6.png', flipped: false, matched: false },
    { id: 7, value: '/memory-game/tree1.png', flipped: false, matched: false },
    { id: 8, value: '/memory-game/tree2.png', flipped: false, matched: false },
    { id: 9, value: '/memory-game/tree3.png', flipped: false, matched: false },
    { id: 10, value: '/memory-game/tree4.png', flipped: false, matched: false },
    { id: 11, value: '/memory-game/tree5.png', flipped: false, matched: false },
    { id: 12, value: '/memory-game/tree6.png', flipped: false, matched: false },
  ];

const MemoryMatchGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<Card[]>([]);

  const { user } = useUser();

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
      const isMatch = card1.value === card2.value;

      if (isMatch) {
        // Match found
        setMatchedCards([...matchedCards, card1, card2]);
        setFlippedCards([]);
      } else {
        // No match found, reflip
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, matchedCards]);

  const handleCardClick = (clickedCard: Card) => {
    // If max flipped or card already flipped
    if (flippedCards.length === 2 || clickedCard.flipped || clickedCard.matched) {
      return;
    }
    // Set card as flipped
    setFlippedCards(prevFlippedCards => [...prevFlippedCards, clickedCard]);
  };

  const resetGame = () => {
    setCards(initialCards.sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    // If all cards matched
    if (matchedCards.length === initialCards.length) {
      setTimeout(() => {
        //set score
        if (user) {
          incrementUserScore(user);
        }
        resetGame();
      }, 500);
    }
  }, [matchedCards]);

  return (
    <div className="flex justify-center w-3/10">
      <div className="grid grid-cols-3 gap-2">
        {cards.map(card => (
          <div
            key={card.id}
            className={`relative cursor-pointer`}
            onClick={() => handleCardClick(card)}
          >
            <div className={`w-24 h-24 bg-forest-green rounded-md`}>
              {flippedCards.includes(card) || matchedCards.includes(card) ? (
                <img src={card.value} alt={`Card ${card.id}`} className="w-full h-full rounded-md" />
              ) : null}
            </div>
            {matchedCards.includes(card) && (
              <div className="absolute inset-0 border-4 border-green-500 rounded-md pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );  
};

export default MemoryMatchGame;