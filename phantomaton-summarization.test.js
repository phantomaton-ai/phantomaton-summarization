import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import plugin from './phantomaton-summarization.js';

const { conversations, system } = plugin;

describe('Phantomaton Summarization Plugin', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    plugin().install.forEach(c => container.install(c));
  });

  it('should bind the summarization assistant to the conversation', () => {
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const conversation = getConversation();
    const turn = conversation.advance([]);
    expect(turn.reply).to.be.a('string');
  });

  it('should summon the system prompt from the summarization', () => {
    const [getPrompt] = container.resolve(system.prompt.resolve);
    const prompt = getPrompt();
    expect(prompt).to.be.a('string');
  });
});