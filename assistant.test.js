import lovecraft from 'lovecraft';
import Summarization from './summarization.js';
import Assistant from './assistant.js';

describe('Phantomaton Summarization Assistant', () => {
  it('should commune with the great old ones to generate summaries', () => {
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 8 });
    const summarization = new Summarization({ turns, message: 'Dread summary' });
    const assistant = new Assistant(summarization, { converse: (t, m) => `Summary: ${m}` });

    const summary = assistant.converse(turns, summarization.message);
    expect(summary).to.equal('Summary: Dread summary');
  });
});