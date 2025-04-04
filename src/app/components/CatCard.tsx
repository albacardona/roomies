import type { CatInfo } from '@/assets/catsInfo';
import clsx from 'clsx';

interface Props {
  cat: CatInfo;
  isFlipped: boolean;
  isFlipping: boolean;
  onClickCard: (cat: CatInfo) => void;
}

export const CatCard = ({ cat, isFlipped, isFlipping, onClickCard }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClickCard(cat)}
      disabled={isFlipping}
      aria-label="cat-card"
      className={clsx({
        'relative size-36 flex flex-col items-center justify-center p-4 bg-bg-primary rounded-lg shadow-md [perspective:1000px] transition-all duration-500 [transform-style:preserve-3d]': true,
        '[transform:rotateY(180deg)]': isFlipped,
      })}
    >
      <div className="absolute w-fit overflow-hidden rounded-lg">
        <img
          src={cat.image}
          alt="frijo"
          className="size-32 object-cover rounded-lg [transform:rotateY(180deg)]"
        />
      </div>
      <div className="absolute size-32 rounded-lg bg-bg-secondary [backface-visibility:hidden]" />
    </button>
  );
};
