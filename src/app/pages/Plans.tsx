import { Tabs } from '@/components/ui/tabs';
import { EventCalendar } from '../components/Calendar/EventCalendar';

export const Plans = () => {
  return (
    <Tabs>
      {/* <Calendar className="w-2/3" /> */}
      <EventCalendar />
    </Tabs>
  );
};
