import lovecraft from 'lovecraft';
import hierophant from 'hierophant';
import Summarization from './summarization.js';
import phantomaton from './phantomaton-summarization.js';

describe('Phantomaton Summarization Plugin', () => {
  it('should bind the summarization assistant to the conversation', () => {
    const container = hierophant.create(phantomaton);
    const [getConversation] = container.resolve(conversations.conversation.resolve);
    const conversation = getConversation();

    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 24 });
    const turn = conversation.advance(turns);

    expect(turn.reply).to.be.a('string');
  });

  it('should summon the system prompt from the summarization', () => {
    const container = hierophant.create(phantomaton);
    const [getSystem] = container.resolve(system.system.resolve);
    const prompt = getSystem();

    expect(prompt).to.be.a('string');
  });
});