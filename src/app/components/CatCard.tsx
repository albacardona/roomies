import type { CatInfo } from '@/assets/catsInfo';

interface Props {
  cat: CatInfo;
  onCardClick: (cat: CatInfo) => void;
  isFlipped: boolean;
  isDisabled: boolean;
}

export const CatCard = ({ cat, onCardClick, isFlipped, isDisabled }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onCardClick(cat)}
      disabled={isDisabled}
      aria-label="cat-card"
      className="relative size-36 flex flex-col items-center justify-center p-4 bg-bg-primary rounded-lg shadow-md [perspective:1000px] transition-all duration-500 [transform-style:preserve-3d]"
    >
      {isFlipped ? (
        <div className="absolute w-fit overflow-hidden rounded-lg">
          <img src={cat.image} alt="frijo" className="size-32 object-cover rounded-lg" />
        </div>
      ) : (
        <div className="absolute size-32 rounded-xl bg-bg-secondary [transform:rotateY(180deg)]" />
      )}
    </button>
  );
};
