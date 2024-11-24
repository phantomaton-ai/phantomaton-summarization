export default class Conversation {
  constructor(summarization, conversation) {
    this.summarization = summarization;
    this.conversation = conversation;
  }

  async advance() {
    const turns = this.conversation.turns;
    const count = turns.length;
    if (count > 0 && count % this.summarization.threshold === 0) {
      this.summarize();
    }
    return await this.conversation.advance();
  }

  async summarize() {
    const summary = await this.conversation.assistant.converse(
      this.conversation.turns, this.summarization.message
    );
    this.summarization.set(summary);
  }
}
