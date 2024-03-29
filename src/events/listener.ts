import { Message, Stan } from "node-nats-streaming";

import { Subject } from "./subject";

interface Event {
  subject: Subject;
  data: any;
}

export abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  abstract onMessage(data: T["data"], msg: Message): void;
  protected ackWait = 5 * 1000;

  constructor(protected client: Stan) {}

  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on("message", (msg: Message) => {
      console.log(`Message received, subject: ${this.subject}`);

      const parsedData = this.parseMessage(msg);

      this.onMessage(parsedData, msg);

      msg.ack();
    });
  }

  private subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  private parseMessage(msg: Message): T["data"] {
    const data = msg.getData();

    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }
}
