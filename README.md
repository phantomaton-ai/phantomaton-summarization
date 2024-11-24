# Phantomaton Summarization 🔍

The Phantomaton Summarization module extends the Phantomaton conversational framework with automated summarization capabilities. This allows Phantomaton-powered conversations to maintain context and provide succinct recaps as the dialog progresses, preventing information overload and ensuring smooth, long-running interactions.

## Features 🔧

- **Automatic Summarization**: The Summarization module seamlessly integrates with the Phantomaton Conversations component, generating summaries of the conversation at configurable intervals.
- **Customizable Summarization**: The content and format of the summaries can be customized through configuration options and extension points.

## Usage 🛠️

To use the Phantomaton Summarization module, you'll need to install it as a dependency in your Phantomaton-based application:

```bash
npm install phantomaton-summarization
```

Once installed, you can configure and integrate the Summarization module with your Phantomaton application's prompt:

```markdown
/install phantomaton-conversations
/install phantomaton-summarization

You are a friendy chatbot with summarization capabilities.
```

## Configuration 🤖

This plugin accepts the following configuration options:

* `turns`: The maximum number of turns to send to an assistant in their unsummarized form.
* `message`: The message to send to the assistant when requesting summarization.

## Extensibility 🔌

The Phantomaton Summarization module is designed to be highly extensible. You can create custom summarization strategies, integrate with external services, or extend the module's functionality in other ways by implementing the appropriate extension points.

For more information on extending the Phantomaton Summarization module, please refer to the [Phantomaton Plugins documentation](https://github.com/phantomaton-ai/phantomaton-plugins#readme).

## Contributing 🤝

We welcome contributions to the Phantomaton Summarization project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Phantomaton Summarization GitHub repository](https://github.com/phantomaton-ai/phantomaton-summarization).

## License 📜

The Phantomaton Summarization module is licensed under the [MIT License](LICENSE).