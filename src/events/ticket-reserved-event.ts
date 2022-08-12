import { Subject } from "./subject";

export interface TicketReservedEvent {
  subject: Subject.TicketReserved;
  data: {
    id: string;
    orderId: string;
  };
}
