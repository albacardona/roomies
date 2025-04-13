import { Input } from '@/components/ui/input';

export const AddEventModal = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="event-name" className="text-fg-primary">
          Nombre del evento
        </label>
        <Input id="event-name" />
      </div>
    </div>
  );
};
