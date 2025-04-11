import { Calendar } from '@/components/ui/calendar';
import { Tabs } from '@/components/ui/tabs';

export const Plans = () => {
  return (
    <Tabs>
      <Calendar className="w-2/3" />
    </Tabs>
  );
};
