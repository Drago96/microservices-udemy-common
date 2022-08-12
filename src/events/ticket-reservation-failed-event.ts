import { Subject } from "./subject";

export interface TicketReservationFailed {
  subject: Subject.TicketReservationFailed;
  data: {
    id: string;
    orderId: string;
    version: number;
  };
}
