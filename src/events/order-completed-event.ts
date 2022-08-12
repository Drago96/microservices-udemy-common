import { Subject } from "./subject";

export interface OrderCompletedEvent {
  subject: Subject.OrderCompleted;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
