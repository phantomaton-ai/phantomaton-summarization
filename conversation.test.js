import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import plugin from './phantomaton-summarization.js';

const { conversations } = plugin;

describe('Phantomaton Conversation Summarization', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    plugin().install.forEach(c => container.install(c));
  });

  it('should summon the specter of periodic summarization', async () => {
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const conversation = getConversation({ turns: [] });

    await conversation.advance();
    await conversation.advance();
    await conversation.advance();

    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ turns: [], message: 'Dread summary' });
    expect(summarization.summary).to.be.a('string');
  });

  it('should commune with the assistant to generate summaries', async () => {
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const conversation = getConversation({ turns: [] });

    await conversation.summarize();

    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ turns: [], message: 'Dread summary' });
    expect(summarization.summary).to.be.a('string');
  });
});