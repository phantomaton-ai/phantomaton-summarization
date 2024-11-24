import lovecraft from 'lovecraft';
import hierophant from 'hierophant';
import Conversation from './conversation.js';
import Summarization from './summarization.js';
import phantomaton from './phantomaton-summarization.js';

describe('Phantomaton Conversation Summarization', () => {
  it('should summon the specter of periodic summarization', async () => {
    const container = hierophant.create(phantomaton);
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 32 });
    const conversation = getConversation({ turns });

    await conversation.advance();
    await conversation.advance();
    await conversation.advance();

    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ turns, message: 'Dread summary' });
    expect(summarization.summary).to.be.a('string');
  });

  it('should commune with the assistant to generate summaries', async () => {
    const container = hierophant.create(phantomaton);
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 16 });
    const conversation = getConversation({ turns });

    await conversation.summarize();

    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ turns, message: 'Dread summary' });
    expect(summarization.summary).to.be.a('string');
  });
});