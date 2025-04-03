import { type CatInfo, CatsInfo } from '@/assets/catsInfo';
import { useMemo, useState } from 'react';

export const useMemoryCards = () => {
  const [selectedCards, setSelectedCards] = useState<CatInfo[]>([]);
  const [matchedCards, setMatchedCards] = useState<CatInfo[]>([]);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const cards = useMemo(() => {
    const cards = [...CatsInfo];
    const doubleCards: CatInfo[] = [];

    for (const cat of cards) {
      const newCat = { id: cat.id + cards.length, cardNumber: cat.cardNumber, image: cat.image };
      doubleCards.push(newCat);
    }
    const allCards = [...doubleCards, ...cards];

    return allCards.sort(() => Math.random() - 0.5);
  }, []);

  const handleClickCard = (cat: CatInfo) => {
    if (isFlipping || matchedCards.includes(cat)) {
      return;
    }

    if (selectedCards.length > 0) {
      setIsFlipping(true);
      setSelectedCards((prev) => [...prev, cat]);

      setTimeout(() => {
        if (selectedCards[0].cardNumber === cat.cardNumber) {
          setMatchedCards((prev) => [...prev, selectedCards[0], cat]);
        }
        setSelectedCards([]);
        setIsFlipping(false);
      }, 1500);
    } else {
      setSelectedCards([cat]);
    }
  };

  return {
    cards,
    selectedCards,
    matchedCards,
    isFlipping,
    handleClickCard,
    setSelectedCards,
    setMatchedCards,
    setIsFlipping,
  };
};
