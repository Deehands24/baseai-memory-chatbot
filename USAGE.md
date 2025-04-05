# Detailed Usage Guide for BaseAI Memory Chatbot

This guide provides comprehensive instructions for setting up, configuring, and using the BaseAI Memory Chatbot.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Memory Files](#memory-files)
- [Running the Chatbot](#running-the-chatbot)
- [Interacting with the Chatbot](#interacting-with-the-chatbot)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- A valid OpenAI API key

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Deehands24/baseai-memory-chatbot.git
   cd baseai-memory-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Environment Variables
1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000  # Optional, defaults to 3000
   ```

## Memory Files

The chatbot uses markdown files stored in the `baseai/memory/memuno/documents` directory as its knowledge base.

### Directory Structure
Create the memory directory structure if it doesn't exist:
```bash
mkdir -p baseai/memory/memuno/documents
```

### Adding Memory Files
1. Place markdown (`.md`) files in the `baseai/memory/memuno/documents` directory.
2. Files should contain structured information that the chatbot can reference.
3. Example memory file structure:
   ```markdown
   # Entity Name
   
   ## Category
   - Observation 1
   - Observation 2
   
   ## Another Category
   - More information
   - Additional details
   ```

### Sample Memory Files
You can create sample memory files to test the chatbot:

1. Create a file `baseai/memory/memuno/documents/sample-knowledge.md`:
   ```markdown
   # AI Assistant
   
   ## Capabilities
   - Natural language processing
   - Context-aware responses
   - Memory access and recall
   
   ## Limitations
   - Cannot browse the internet
   - Limited to knowledge in memory files
   ```

## Running the Chatbot

### Development Mode
Run the chatbot with automatic restart on code changes:
```bash
npm run dev
```

### Production Mode
Run the chatbot for production:
```bash
npm start
```

### Accessing the Chatbot
Once running, access the chatbot at:
- http://localhost:3000 (or the port specified in your `.env` file)

## Interacting with the Chatbot

The chatbot interface is intuitive and user-friendly:

1. **Sending Messages**: Type your message in the input field at the bottom of the page and click "Send" or press Enter.

2. **History**: Your conversation history is maintained within your session. If you refresh the page, a new session will start.

3. **Example Questions**:
   - "What information do you have in your memory?"
   - "Tell me about [entity or concept from your memory files]"
   - "How can I [task related to information in memory]?"

## Customization

### User Interface
To customize the user interface, edit the `public/index.html` file:

- **Colors**: Modify the CSS variables and color codes
- **Layout**: Adjust the HTML structure
- **Behavior**: Modify the JavaScript for different interactions

### System Prompt
To change the chatbot's personality or behavior, modify the system prompt in `chatbot.js`:

```javascript
// Find this code block in chatbot.js
{
  role: 'system',
  content: `Your custom system prompt here...`
}
```

### Model Parameters
You can adjust the AI model parameters in `chatbot.js`:

```javascript
// Find and modify these parameters
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',  // Change to another compatible model
  messages: sessions[sessionId],
  max_tokens: 1000,      // Adjust response length
  temperature: 0.7,      // Adjust randomness (0.0-1.0)
});
```

## Troubleshooting

### API Key Issues
If you encounter "Invalid API key" errors:
- Ensure your OpenAI API key is correctly set in the `.env` file
- Verify your OpenAI account has an active subscription with available credits
- Check if your API key has the necessary permissions for the specified model

### Memory Loading Issues
If the chatbot can't find or load memory files:
- Verify the directory structure: `baseai/memory/memuno/documents/`
- Ensure files have `.md` extension
- Check file permissions

### Server Connection Issues
If you can't connect to the server:
- Verify the server is running (check terminal output)
- Ensure no other service is using the same port
- Try accessing with `http://localhost:3000` explicitly

### Memory Performance
If the chatbot seems to ignore or forget memory content:
- Ensure memory files are properly formatted
- Consider breaking large memory files into smaller, more focused files
- Verify the total size of memory content isn't exceeding token limits