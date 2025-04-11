import { Avatar } from '../components/Avatar';
import { users } from '@/assets/users';

export const HomePage = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-4xl font-bold">¿Quién eres?</h2>
      <div className="flex items-center gap-12">
        {users?.map((user) => (
          <Avatar key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
