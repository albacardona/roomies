import dayjs from 'dayjs';
import type { HeaderProps } from 'react-big-calendar';

export const MonthHeader = ({ date }: HeaderProps) => {
  return <p className="capitalize p-2">{dayjs(date).format('dddd')}</p>;
};
