import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import plugin from './phantomaton-summarization.js';

const { summarization } = plugin;

describe('Phantomaton Summarization', () => {
  let container;

  beforeEach(() => {
    container = hierophant();
    plugin().install.forEach(c => container.install(c));
  });

  it('provides a system prompt from summarization', () => {
    const [getPrompt] = container.resolve(system.prompt.resolve);
    const prompt = getPrompt();
    expect(prompt).to.be.a('string');
  });

  it('aggregates assistant providers for summarization', () => {
    const assistant1 = stub().returns('Summary 1');
    const assistant2 = stub().returns('Summary 2');

    container.install(conversations.assistant.provider([], () => assistant1));
    container.install(conversations.assistant.provider([], () => assistant2));

    const [getAssistant] = container.resolve(conversations.assistant.resolve);
    const summary = getAssistant().converse([], 'Dread summary');

    expect(assistant1.called).to.be.true;
    expect(assistant2.called).to.be.true;
    expect(summary).to.equal('Summary 1\nSummary 2');
  });

  it('preserves the sanctity of the summarization', () => {
    const [getSummarization] = container.resolve(summarization.summarization.resolve);
    const summarization = getSummarization({ message: 'Dread summary', turns: 16 });
    summarization.set('New summary');
    expect(summarization.summary).to.equal('New summary');
  });
});