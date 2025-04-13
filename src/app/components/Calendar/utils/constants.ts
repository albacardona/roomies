import type { DatePickerEventFormData, EventFormData } from '@/types/types';

export const generateId = () => (Math.floor(Math.random() * 10000) + 1).toString();

export const initialEventFormState: EventFormData = {
  description: '',
  todoId: undefined,
};

export const initialDatePickerEventFormData: DatePickerEventFormData = {
  description: '',
  todoId: undefined,
  allDay: false,
  start: undefined,
  end: undefined,
};
