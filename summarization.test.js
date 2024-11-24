import lovecraft from 'lovecraft';
import Summarization from './summarization.js';

describe('Phantomaton Summarization', () => {
  it('should summon the spirit of concision', () => {
    const summary = lovecraft.invoke('summon', 'concision');
    const summarization = new Summarization({ message: summary, turns: 16 });
    expect(summarization.prompt()).to.be.a('string');
  });

  it('should peer into the abyss of conversation history', () => {
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history');
    const summarization = new Summarization({ turns });
    const summary = summarization.assistant.converse(turns, summarization.message);
    expect(summary).to.be.a('string');
  });

  it('should preserve the sanctity of the summary', () => {
    const summarization = new Summarization({ message: 'Dread summary', turns: 16 });
    summarization.set('New summary');
    expect(summarization.summary).to.equal('New summary');
  });
});