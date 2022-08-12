import { Subject } from "./subject";

export interface TicketNotReservedEvent {
  subject: Subject.TicketNotReserved;
  data: {
    id: string;
    orderId: string;
  };
}
