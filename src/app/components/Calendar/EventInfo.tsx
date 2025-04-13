import type { IEventInfo } from '@/types/types';

interface IProps {
  event: IEventInfo;
}

const EventInfo = ({ event }: IProps) => {
  return <div>{event.description}</div>;
};

export default EventInfo;
