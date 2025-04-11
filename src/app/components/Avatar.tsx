import { useUser } from '@/context/user-context';
import type { User } from '@/types/types';

interface Props {
  user: User;
}

export const Avatar = ({ user }: Props) => {
  const { selectUser } = useUser();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        type="button"
        className="size-28 sm:size-44 rounded-full border-8 border-primary dark:border-accent"
        onClick={() => selectUser(user)}
      >
        <img className="rounded-full size-full" alt={user.name} src={user.src} />
      </button>
      <p className="text-lg font-semibold sm:text-2xl">{user.name}</p>
    </div>
  );
};
