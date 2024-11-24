import Assistant from './assistant.js';
import Conversation from './conversation.js';
import defaults from './defaults.js';

class Summarization {
  constructor(options) {
    const { message, turns } = { ...defaults, ...options };
    this.message = message;
    this.turns = turns;
    this.threshold = turns / 2;
    this.summary = '';
  }

  set(summary) {
    this.summary = summary;
  }

  prompt() {
    return [
      '# Summary of the conversation so far \n\n',
      this.summary
    ].join('\n\n');
  }

  assistant(assistant) {
    return new Assistant(this, assistant);
  }

  conversation(conversation) {
    return new Conversation(this, conversation);
  }
}

export default Summarization;
