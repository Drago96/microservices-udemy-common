export enum OrderStatus {
  // Order has been created, but the ticket has not yet been reserved
  Created = "created",

  // Ticket has already been reserved, the user has cancelled the order or the order has expired
  Cancelled = "cancelled",

  // The order has successfully reserved the ticket
  AwaitingPayment = "awaiting_payment",

  // The order has reserved the ticket and the user has provided payment
  Complete = "complete",
}
