import { Subject } from "./subject";

export interface TicketReservationFailedEvent {
  subject: Subject.TicketReservationFailed;
  data: {
    id: string;
    orderId: string;
    version: number;
  };
}
