import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import conversations from 'phantomaton-conversations';
import system from 'phantomaton-system';

import summarization from './phantomaton-summarization.js';

describe('Phantomaton Summarization Plugin', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    [
      conversations,
      system,
      summarization
    ].forEach(plugin => {
      plugin().install.forEach(c => container.install(c));
    });
  });

  it('binds the summarization assistant to the conversation', () => {
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const conversation = getConversation();
    const turn = conversation.advance([]);
    expect(turn.reply).to.be.a('string');
  });

  it('summons the system prompt from the summarization', () => {
    const [getPrompt] = container.resolve(system.prompt.resolve);
    const prompt = getPrompt();
    expect(prompt).to.be.a('string');
  });
});