import { CatCard } from '../components/CatCard';
import { Container } from '../components/Container';
import { useMemoryCards } from '@/lib/useMemoryCards';

export const Cats = () => {
  const { cards, selectedCards, matchedCards, isFlipping, handleClickCard } = useMemoryCards();

  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className="w-fit items-center grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              onClickCard={handleClickCard}
              isFlipped={selectedCards.includes(cat) || matchedCards.includes(cat)}
              isFlipping={isFlipping}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
