import { OrderStatus } from "../types/order-status";
import { Subject } from "./subject";

export interface OrderCreatedEvent {
  subject: Subject.OrderCreated;
  data: {
    id: string;
    userId: string;
    expiresAt: string;
    status: OrderStatus;
    ticket: {
      id: string;
      price: number;
    };
  };
}
