import { expect } from 'chai';
import Summarization from './summarization.js';
import Assistant from './assistant.js';
import Conversation from './conversation.js';

describe('Summarization', () => {
  it('generates a system prompt with the current summary', () => {
    const summarization = new Summarization({ message: 'Dread summary', turns: 16 });
    summarization.set('New summary');

    const prompt = summarization.prompt();
    expect(prompt).to.equal('# Summary of the conversation so far \n\nNew summary');
  });

  it('creates an assistant with the summarization context', () => {
    const summarization = new Summarization({ message: 'Dread summary', turns: 16 });
    const assistant = summarization.assistant({
      converse: (turns, message) => `Summary: ${message}`
    });

    const summary = assistant.converse(['turn1', 'turn2'], 'Dread summary');
    expect(summary).to.equal('Summary: Dread summary');
  });

  it('creates a conversation with the summarization context', async () => {
    const summarization = new Summarization({ message: 'Dread summary', turns: 16 });
    const conversation = {
      turns: ['turn1', 'turn2', 'turn3', 'turn4'],
      assistant: {
        converse: (turns, message) => `Summary: ${message}`
      },
      advance: async () => ({ message: 'turn5', reply: 'response5' })
    };
    const summarized = summarization.conversation(conversation);

    await summarized.advance();
    expect(summarization.summary).to.equal('Summary: Dread summary');
  });
});