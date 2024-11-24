import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import plugin from './phantomaton-summarization.js';

const { conversations } = plugin;

describe('Phantomaton Summarization Assistant', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    plugin().install.forEach(c => container.install(c));
  });

  it('should commune with the great old ones to generate summaries', () => {
    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ turns: [], message: 'Dread summary' });
    const [getAssistant] = container.resolve(conversations.assistant.resolve);
    const summary = getAssistant().converse([], summarization.message);
    expect(summary).to.equal('Summary: Dread summary');
  });
});