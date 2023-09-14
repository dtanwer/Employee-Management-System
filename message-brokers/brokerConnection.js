const ampq = require("amqplib");
const { stringify } = require("uuid");
class Producer {
  chennel;
  async createChannel() {
    try {
      const connection = await ampq.connect(process.env.RABBITMQ_URL);
      this.channel = await connection.createChannel();
      console.log("🐇 RabbitMQ connected Successfully");
    } catch (err) {
      console.log("Failed to Connect", err);
      throw err;
    }
  }
  async publish(routingKey, message) {
    if (!this.channel) await this.createChannel();
    const exchangeType = "fanout";
    const exchangeName = process.env.EXCHANGE_NAME;
    await this.channel.assertExchange(exchangeName, exchangeType);

    const queueName = process.env.EXCHANGE_QUEUE;
    await this.channel.assertQueue(queueName, { durable: true });
    await this.channel.bindQueue(queueName, exchangeName, routingKey);

    const properties = {
      contentType: "application/json",
      persistent: true,
      headers: { type: "User Request Created" },
      messageId: message._id,
      eventType:message.eventType
    };

    delete message["eventType"]

    const isMeassageSent = await this.channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(message)),
      properties
    );
    console.log(`The message is sent ${message}`);
    return isMeassageSent;
  }
}

module.exports = new Producer();
