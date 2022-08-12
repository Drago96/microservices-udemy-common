import { Subject } from "./subject";

export interface OrderConfirmedEvent {
  subject: Subject.OrderConfirmed;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
