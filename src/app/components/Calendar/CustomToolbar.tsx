import { Button } from '@/components/ui/button';
import type { IEventInfo } from '@/types/types';
import { ChevronLeft, ChevronRight } from '@untitled-ui/icons-react';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Navigate, Views, type ToolbarProps } from 'react-big-calendar';

export const CustomToolbar = ({
  date,
  view,
  onView,
  onNavigate,
}: ToolbarProps<IEventInfo, object>) => {
  const currentMonth = useMemo(() => {
    if (view === Views.MONTH) {
      return dayjs(date).format('MMMM');
    }
    if (view === Views.WEEK) {
      const start = dayjs(date).startOf('week').format('DD');
      const end = dayjs(date).endOf('week').format('DD');
      const startMonth = dayjs(date).startOf('week').format('MMMM');
      const endMonth = dayjs(date).endOf('week').format('MMMM');
      const year = dayjs(date).format('YYYY');
      return `${start} ${startMonth !== endMonth ? startMonth : ''} - ${end} ${endMonth} ${year}`;
    }
    if (view === Views.DAY) {
      return dayjs(date).format('DD/MM/YYYY');
    }
  }, [date, view]);

  return (
    <div className="h-10 w-full mb-2 flex items-center justify-between">
      <div className="h-full flex items-center border border-bd-primary rounded-lg">
        <Button
          variant={view === Views.MONTH ? 'secondary' : 'default'}
          className="h-full rounded-l-lg rounded-r-none"
          onClick={() => onView(Views.MONTH)}
        >
          MES
        </Button>
        <hr className="h-10 w-[1px] bg-bd-primary" />
        <Button
          variant={view === Views.WEEK ? 'secondary' : 'default'}
          className="h-full rounded-none"
          onClick={() => onView(Views.WEEK)}
        >
          SEMANA
        </Button>
        <hr className="h-10 w-[1px] bg-bd-primary" />
        <Button
          variant={view === Views.DAY ? 'secondary' : 'default'}
          className="h-full rounded-l-none rounded-r-lg"
          onClick={() => onView(Views.DAY)}
        >
          DÍA
        </Button>
      </div>
      <div className="uppercase font-semibold text-lg">{currentMonth}</div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="raw" onClick={() => onNavigate(Navigate.PREVIOUS)}>
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="raw" onClick={() => onNavigate(Navigate.TODAY)}>
          HOY
        </Button>
        <Button variant="ghost" size="raw" onClick={() => onNavigate(Navigate.NEXT)}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
