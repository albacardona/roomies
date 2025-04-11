import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { type DateClickArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import clsx from 'clsx';
import dayjs from 'dayjs';

interface Props {
  className?: string;
}

export const Calendar = ({ className }: Props) => {
  const handleClick = (date: DateClickArg) => {
    const newDate = date.dateStr;

    console.log(dayjs(newDate).format('DD/MM/YYYY'));
  };
  return (
    <div className={clsx(className, {})}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleClick}
      />
    </div>
  );
};
