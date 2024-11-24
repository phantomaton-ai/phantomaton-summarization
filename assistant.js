export default class Assistaant {
  constructor(summarization, assistant) {
    this.summarization = summarization;
    this.assistant = assistant;
  }

  converse(turns, message) {
    return this.assistant.converse(
      turns.slice(-this.summarization.turns), message
    );
  }
}
