import conversations from 'phantomaton-conversations';
import system from 'phantomaton-system';
import plugins from 'phantomaton-plugins';

import Summarization from './summarization.js';

export default plugins.create(
  configuration => new Summarization(configuration),
  ({ instance }) => [
    plugins.define(system.system).as(() => instance.prompt()),
    conversations.assistant.decorator(
      [],
      () => assistant => instance.assistant(assistant)
    ),
    conversations.conversation.decorator(
      [],
      () => conversation => instance.conversation(conversation)
    )
  ]
);
