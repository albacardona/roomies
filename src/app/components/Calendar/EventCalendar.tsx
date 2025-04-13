import { useMemo, useState } from 'react';
import { Calendar, dayjsLocalizer, type Event } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import type { IEventInfo } from '@/types/types';
import { Button } from '@/components/ui/button';
import { useModal } from '@/context/modal-context';
import { AddEventModal } from './AddEventModal';
import EventInfo from './EventInfo';
import { Plus } from '@untitled-ui/icons-react';
import { EventsList } from './EventsList';

import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import { CustomToolbar } from './CustomToolbar';
import { MonthHeader } from './MonthHeader';
import './EventCalendar.css';
import { WeekHeader } from './WeekHeader';
dayjs.extend(timezone);

const djLocalizer = dayjsLocalizer(dayjs);

export const EventCalendar = () => {
  const addEventModal = useModal();
  const [openSlot, setOpenSlot] = useState<boolean>(false);
  const [currentEvent, setCurrentEvent] = useState<Event | IEventInfo | null>(null);
  const [events, setEvents] = useState<IEventInfo[]>([]);

  const handleSelectSlot = (event: Event) => {
    setOpenSlot(true);
    setCurrentEvent(event);
    console.log(event);
  };

  const handleSelectEvent = (event: IEventInfo) => {
    setCurrentEvent(event);
  };

  const handleClickAddEvent = () => {
    addEventModal.showModal({
      title: 'Añade un evento',
      content: <AddEventModal />,
    });
  };

  const components = useMemo(
    () => ({
      event: EventInfo,
      toolbar: CustomToolbar,
      month: {
        header: MonthHeader,
      },
      week: {
        header: WeekHeader,
      },
    }),
    [],
  );

  return (
    <section className="size-full">
      <div className="size-full flex items-start p-6 box-border bg-bg-secondary rounded-lg gap-6">
        <div className="w-4/6">
          <Calendar
            localizer={djLocalizer}
            events={events}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            startAccessor="start"
            components={components}
            endAccessor="end"
            defaultView="month"
            views={{
              month: true,
              week: true,
              day: true,
            }}
            style={{
              height: 'calc(100vh - 11rem)',
            }}
          />
        </div>
        <div className="h-[calc(100vh-14rem)] w-2/6">
          <div className="h-10 mb-2 w-full flex justify-end">
            <Button
              variant="secondary"
              className="flex items-center gap-2"
              onClick={handleClickAddEvent}
            >
              <Plus className="text-fg-primary w-5" />
              Añadir evento
            </Button>
          </div>
          <EventsList />
        </div>
      </div>
    </section>
  );
};
