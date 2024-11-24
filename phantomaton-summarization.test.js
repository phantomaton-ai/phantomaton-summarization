import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import conversations from 'phantomaton-conversations';
import plugins from 'phantomaton-plugins';
import system from 'phantomaton-system';

import Conversation from './conversation.js';
import summarization from './phantomaton-summarization.js';

describe('Phantomaton Summarization Plugin', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    container.install(plugins.input.resolver());
    container.install(plugins.input.provider([], () => () => 'test'));
    [conversations, system, summarization].forEach(plugin => {
      plugin().install.forEach(c => container.install(c));
    });
  });

  it('binds the summarization assistant to the conversation', () => {
    const [conversation] = container.resolve(conversations.conversation.resolve);
    expect(conversation([])).instanceof(Conversation);
  });

  it('summons the system prompt from the summarization', () => {
    const [prompt] = container.resolve(system.system.resolve);
    expect(prompt()).to.be.a('string');
  });
});