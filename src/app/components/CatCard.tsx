import type { CatInfo } from '@/assets/catsInfo';
import clsx from 'clsx';

interface Props {
  cat: CatInfo;
  isFlipped: boolean;
  isDisabled: boolean;
  onClickCard: (cat: CatInfo) => void;
}

export const CatCard = ({ cat, isFlipped, isDisabled, onClickCard }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClickCard(cat)}
      disabled={isDisabled}
      aria-label="cat-card"
      className={clsx({
        'relative size-36 flex flex-col items-center justify-center p-4 bg-bg-primary rounded-lg shadow-md [perspective:1000px] transition-all duration-500 [transform-style:preserve-3d]': true,
        'cursor-progress': isDisabled,
      })}
    >
      <div
        className={clsx({ 'absolute w-fit overflow-hidden rounded-lg': true, hidden: !isFlipped })}
      >
        <img src={cat.image} alt="frijo" className="size-32 object-cover rounded-lg" />
      </div>
      <div
        className={clsx({
          'absolute size-32 rounded-xl bg-bg-secondary [transform:rotateY(180deg)]': true,
          hidden: isFlipped,
        })}
      />
    </button>
  );
};
