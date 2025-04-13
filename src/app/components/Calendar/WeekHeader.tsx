import dayjs from 'dayjs';
import type { HeaderProps } from 'react-big-calendar';

export const WeekHeader = ({ date }: HeaderProps) => {
  return <p className="capitalize">{dayjs(date).format('ddd DD')}</p>;
};
