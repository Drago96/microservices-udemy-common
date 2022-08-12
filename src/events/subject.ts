export enum Subject {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",
  TicketReserved = "ticket:reserved",
  TicketNotReserved = "ticket:not-reserved",
  OrderCreated = "order:created",
  OrderConfirmed = "order:confirmed",
  OrderCancelled = "order:cancelled",
  OrderCompleted = "order:completed",
  ExpirationComplete = "expiration:complete",
  PaymentCreated = "payment:created",
}
