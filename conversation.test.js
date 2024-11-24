import { expect } from 'chai';
import Conversation from './conversation.js';
import Summarization from './summarization.js';

describe('Conversation', () => {
  it('summarizes the conversation periodically', async () => {
    const summarization = new Summarization({ turns: 16, message: 'Dread summary' });
    const conversation = {
      turns: ['turn1', 'turn2', 'turn3', 'turn4'],
      assistant: {
        converse: (turns, message) => `Summary: ${message}`
      },
      advance: async () => ({ message: 'turn5', reply: 'response5' })
    };
    const conversationWithSummarization = new Conversation(summarization, conversation);

    await conversationWithSummarization.advance();
    await conversationWithSummarization.advance();
    await conversationWithSummarization.advance();

    expect(summarization.summary).to.equal('Summary: Dread summary');
  });

  it('generates a summary when requested', async () => {
    const summarization = new Summarization({ turns: 16, message: 'Dread summary' });
    const conversation = {
      turns: ['turn1', 'turn2', 'turn3', 'turn4'],
      assistant: {
        converse: (turns, message) => `Summary: ${message}`
      }
    };
    const conversationWithSummarization = new Conversation(summarization, conversation);

    await conversationWithSummarization.summarize();

    expect(summarization.summary).to.equal('Summary: Dread summary');
  });
});