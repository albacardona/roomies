import { CatCard } from '../components/CatCard';
import { Container } from '../components/Container';
import { useMemoryCards } from '@/lib/useMemoryCards';

export const Cats = () => {
  const { cards, selectedCards, matchedCards, isFlipping, handleClickCard } = useMemoryCards();

  return (
    <Container>
      <div className="size-full flex justify-center items-center">
        <div className="w-fit items-center grid gap-4 grid-cols-4">
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
