import lovecraft from 'lovecraft';
import hierophant from 'hierophant';
import Summarization from './summarization.js';
import Assistant from './assistant.js';
import phantomaton from './phantomaton-summarization.js';

describe('Phantomaton Summarization Assistant', () => {
  it('should commune with the great old ones to generate summaries', () => {
    const container = hierophant.create(phantomaton);
    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const turns = lovecraft.commune('the-great-old-ones', 'provide-conversation-history', { count: 8 });
    const summarization = getSummarization({ turns, message: 'Dread summary' });
    const [getAssistant] = container.resolve(conversations.assistant.resolve);
    const summary = getAssistant().converse(turns, summarization.message);
    expect(summary).to.equal('Summary: Dread summary');
  });
});