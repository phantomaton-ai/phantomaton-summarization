import lovecraft from 'lovecraft';
import Conversation from './conversation.js';
import Summarization from './summarization.js';

describe('Phantomaton Conversation Summarization', () => {
  it('should summon the specter of periodic summarization', async () => {
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 32 });
    const summarization = new Summarization({ turns, message: 'Dread summary' });
    const conversation = new Conversation(summarization, { turns });

    await conversation.advance();
    await conversation.advance();
    await conversation.advance();

    expect(summarization.summary).to.be.a('string');
  });

  it('should commune with the assistant to generate summaries', async () => {
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 16 });
    const summarization = new Summarization({ turns, message: 'Dread summary' });
    const conversation = new Conversation(summarization, { turns });

    await conversation.summarize();
    expect(summarization.summary).to.be.a('string');
  });
});