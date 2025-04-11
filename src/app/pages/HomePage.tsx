import Alba from '@/assets/img/AlbaAvatar.jpeg';
import { Avatar } from '../components/Avatar';

export const HomePage = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center gap-12">
      <h2 className="text-4xl font-bold">¿Quién eres?</h2>
      <div className="flex items-center gap-12">
        <Avatar name="Alba" src={Alba} />
        <Avatar name="Borru" src={Alba} />
      </div>
    </div>
  );
};
