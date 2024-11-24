import lovecraft from 'lovecraft';
import hierophant from 'hierophant';
import Summarization from './summarization.js';
import phantomaton from './phantomaton-summarization.js';

describe('Phantomaton Summarization', () => {
  it('should summon the spirit of concision', () => {
    const container = hierophant.create(phantomaton);
    const [getSummary] = container.resolve(system.prompt.resolve);
    const summary = getSummary();
    expect(summary).to.be.a('string');
  });

  it('should peer into the abyss of conversation history', () => {
    const container = hierophant.create(phantomaton);
    const [getAssistant] = container.resolve(conversations.assistant.resolve);
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 24 });
    const summary = getAssistant().converse(turns, 'Dread summary');
    expect(summary).to.be.a('string');
  });

  it('should preserve the sanctity of the summary', () => {
    const container = hierophant.create(phantomaton);
    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ message: 'Dread summary', turns: 16 });
    summarization.set('New summary');
    expect(summarization.summary).to.equal('New summary');
  });
});