# BaseAI Memory Chatbot

A chatbot that accesses and utilizes information stored in memory files, built with Node.js, Express, and OpenAI API. This project demonstrates a Minimum Viable Product (MVP) approach to AI application development.

## Features

- Loads memory content from markdown files
- Integrates with OpenAI API (gpt-4o-mini model)
- Provides a clean, modern chat interface
- Maintains conversation context through sessions
- Responsive design for mobile and desktop
- Real-time typing indicators

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deehands24/baseai-memory-chatbot.git
   cd baseai-memory-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the example:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to the `.env` file

5. Create a `baseai/memory/memuno/documents` directory and add your markdown files

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`

3. Start chatting with the AI assistant

## Development

For development with auto-restart:

```bash
npm run dev
```

## Project Structure

```
├── chatbot.js           # Main server file
├── public/              # Static files
│   └── index.html       # Web interface
├── baseai/              # Memory files directory
│   └── memory/
│       └── memuno/
│           └── documents/
│               └── *.md  # Markdown memory files
├── package.json         # Dependencies and scripts
└── .env                 # Environment variables
```

## License

MIT