import { expect } from 'chai';
import Assistant from './assistant.js';
import Summarization from './summarization.js';

describe('Assistant', () => {
  it('should converse with the provided assistant, using the last N turns', () => {
    const summarization = new Summarization({ turns: 16, message: 'Dread summary' });
    const assistant = {
      converse: (turns, message) => `Summary: ${message}`
    };
    const conversationAssistant = new Assistant(summarization, assistant);

    const turns = ['turn1', 'turn2', 'turn3', 'turn4'];
    const summary = conversationAssistant.converse(turns, 'Dread summary');

    expect(summary).to.equal('Summary: Dread summary');
  });
});