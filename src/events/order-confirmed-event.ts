import { Subject } from "./subject";

export interface OrderConfirmedEvent {
  subject: Subject.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
