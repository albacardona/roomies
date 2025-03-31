import { useMemo, useState } from 'react';
import { CatCard } from '../components/CatCard';
import { Container } from '../components/Container';
import { type CatInfo, CatsInfo } from '@/assets/catsInfo';

export const Cats = () => {
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

  const handleCardClick = (cat: CatInfo) => {
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
      }, 2000);
    } else {
      setSelectedCards([cat]);
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className="w-fit items-center grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              onCardClick={handleCardClick}
              isFlipped={selectedCards.includes(cat) || matchedCards.includes(cat)}
              isDisabled={isFlipping}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
