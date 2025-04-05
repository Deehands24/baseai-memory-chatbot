# BaseAI Memory Chatbot Wiki Content

This file contains the content for all wiki pages. You can copy and paste these sections into the GitHub wiki section of your repository.

## Home.md

```markdown
# BaseAI Memory Chatbot Wiki

Welcome to the BaseAI Memory Chatbot wiki! This wiki provides detailed documentation for understanding, installing, configuring, and extending the chatbot.

## Overview

BaseAI Memory Chatbot is a Node.js application that leverages the OpenAI API to create a conversational interface to access and query information stored in memory files. The application uses Express for the backend server and a clean, modern HTML/CSS/JavaScript interface for the frontend.

## Key Features

- **Memory Access**: Loads information from markdown files and makes it accessible through natural language conversation
- **Session Management**: Maintains conversation history and context
- **Modern Interface**: Clean, responsive design with typing indicators and message bubbles
- **OpenAI Integration**: Leverages powerful language model capabilities
- **Customizable**: Easily modify the system prompt, UI, and behavior

## Contents

### Getting Started
- [Installation Guide](Installation-Guide)
- [Quick Start](Quick-Start)
- [Configuration Options](Configuration-Options)

### Core Concepts
- [Memory System Overview](Memory-System)
- [Conversation Flow](Conversation-Flow)
- [System Architecture](System-Architecture)

### Advanced Topics
- [Customization Guide](Customization-Guide)
- [Extending Functionality](Extending-Functionality)
- [Deployment Guide](Deployment-Guide)

### Resources
- [Troubleshooting](Troubleshooting)
- [API Reference](API-Reference)
- [Contributing Guidelines](Contributing-Guidelines)

## About This Project

This project was developed as part of Hands developer portfolio, demonstrating the MVP (Minimum Viable Product) approach to application development. It showcases how to:

1. Start with core functionality
2. Focus on user experience
3. Integrate with AI capabilities
4. Structure memory for effective retrieval
5. Build a responsive and accessible interface

For basic usage instructions, please see the [USAGE.md](https://github.com/Deehands24/baseai-memory-chatbot/blob/main/USAGE.md) file in the main repository.
```

## Installation-Guide.md

```markdown
# Installation Guide

This guide provides detailed instructions for installing the BaseAI Memory Chatbot on your system.

## Prerequisites

Before installing the chatbot, ensure you have the following:

- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher
- **Git**: For cloning the repository
- **OpenAI API Key**: A valid API key with access to the gpt-4o-mini model

## Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Deehands24/baseai-memory-chatbot.git
cd baseai-memory-chatbot
```

## Step 2: Install Dependencies

Install all required dependencies:

```bash
npm install
```

This will install:
- Express (web server)
- OpenAI API client
- CORS middleware
- dotenv (for environment variables)
- nodemon (for development)

## Step 3: Configure Environment Variables

1. Create a `.env` file based on the provided example:

```bash
cp .env.example .env
```

2. Open the `.env` file and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000  # Optional, defaults to 3000
```

## Step 4: Set Up Memory Directory

Create the directory structure for memory files:

```bash
mkdir -p baseai/memory/memuno/documents
```

## Step 5: Add Memory Files

Add markdown files to the memory directory. These files will form the knowledge base for your chatbot.

Example memory file (`baseai/memory/memuno/documents/example.md`):

```markdown
# Project Knowledge

## Features
- Feature 1: Description
- Feature 2: Description

## Technical Details
- Framework: Node.js with Express
- Frontend: HTML, CSS, JavaScript
- AI: OpenAI API integration
```

## Step 6: Verify Installation

Ensure everything is set up correctly:

1. Check that all dependencies were installed properly in `node_modules`
2. Verify your `.env` file contains the API key
3. Confirm the memory directory structure exists

## Next Steps

Once installation is complete, proceed to the [Quick Start](Quick-Start) guide to run your chatbot.
```

## Quick-Start.md

```markdown
# Quick Start Guide

Get your BaseAI Memory Chatbot up and running quickly with these simple steps.

## Starting the Server

### Development Mode

For development with automatic restart on code changes:

```bash
npm run dev
```

### Production Mode

For running in production:

```bash
npm start
```

## Accessing the Chatbot

Once the server is running, you can access the chatbot in your web browser:

- **URL**: http://localhost:3000 (or the port specified in your `.env` file)

You should see the chat interface with a welcome message.

## Your First Conversation

Try these example messages to test your chatbot:

1. "Hello, what can you help me with?"
2. "What information do you have in your memory?"
3. "Tell me about [topic in your memory files]"

## Understanding the Response

The chatbot will:
1. Process your message
2. Reference information in memory files
3. Generate a contextually relevant response
4. Maintain conversation history for context

## Stopping the Server

To stop the server:
- In your terminal, press `Ctrl+C`

## Troubleshooting Quick Issues

If you encounter problems:

- **Server won't start**: Check for error messages in the terminal
- **API key errors**: Verify your OpenAI API key in `.env`
- **Empty responses**: Ensure memory files are correctly placed and formatted
- **Port conflicts**: Change the port in `.env` if port 3000 is already in use

## Next Steps

- Review the [Configuration Options](Configuration-Options) to customize your chatbot
- Learn about the [Memory System](Memory-System) to optimize your knowledge base
- Explore the [Customization Guide](Customization-Guide) to modify the interface and behavior
```

## Memory-System.md

```markdown
# Memory System Overview

The BaseAI Memory Chatbot's memory system allows it to access and utilize information stored in markdown files. This page explains how the memory system works and how to optimize it for your needs.

## How Memory Works

1. **Loading**: When the server starts, it loads all markdown files from the `baseai/memory/memuno/documents` directory
2. **Processing**: The content is concatenated into a single text string
3. **Context Injection**: This content is included in the system prompt for the AI
4. **Retrieval**: The AI uses this context to respond to user queries

## Memory File Structure

Memory files should be structured markdown documents (.md) that contain information the chatbot can reference.

### Recommended Structure

Organize information in a hierarchical structure:

```markdown
# Main Topic or Entity

## Subtopic 1
- Point 1
- Point 2
- Point 3

## Subtopic 2
- Information A
- Information B
- Example: example detail
```

### Entity-Relation Model

For complex knowledge bases, consider using an entity-relation model:

```markdown
# Entities
### Entity1 (Type)
- Observation 1
- Observation 2

### Entity2 (Type)
- Observation 3
- Observation 4

# Relations
### Entity1
- **relationType**: Entity2
- **anotherRelation**: Entity3

### Entity2
- **relationType**: Entity3
```

## Memory Size Considerations

- **Token Limits**: The memory context consumes tokens from the model's context window
- **Optimal Size**: Keep individual files focused and concise
- **Prioritization**: Place the most important information at the beginning of files

## Tips for Effective Memory

1. **Organize logically**: Group related information together
2. **Use clear headings**: Make the structure navigable
3. **Include examples**: Provide examples for complex concepts
4. **Be specific**: Use precise language and terminology
5. **Update regularly**: Refresh memory files with new information

## Memory Access Patterns

The chatbot's ability to retrieve information depends on:

1. **Query relevance**: How well the user's query aligns with memory content
2. **Memory structure**: How well the information is organized
3. **Context window**: The model's ability to process large contexts

## Extending the Memory System

To enhance the memory system:
- Implement vector database for semantic search (future enhancement)
- Add tagging system for better retrieval (future enhancement)
- Create memory update API endpoints (future enhancement)
```

## System-Architecture.md

```markdown
# System Architecture

This page describes the architecture of the BaseAI Memory Chatbot, providing a technical overview of how the different components work together.

## Architecture Overview

The BaseAI Memory Chatbot follows a client-server architecture:

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│             │      │             │      │             │
│  Web Client │◄────►│  Express    │◄────►│  OpenAI API │
│  (Browser)  │      │  Server     │      │             │
│             │      │             │      │             │
└─────────────┘      └──────┬──────┘      └─────────────┘
                            │
                     ┌──────▼──────┐
                     │             │
                     │  Memory     │
                     │  Files      │
                     │             │
                     └─────────────┘
```

## Components

### 1. Express Server (Backend)

The core server component (`chatbot.js`) handles:
- HTTP request/response handling
- API endpoint management
- Memory file loading
- Session management
- OpenAI API integration

Technologies:
- Node.js runtime
- Express web framework
- CORS middleware
- dotenv for configuration

### 2. Web Client (Frontend)

A simple HTML/CSS/JavaScript application that provides:
- User interface for chat interaction
- Message display
- Input handling
- Session tracking
- Typing indicators

Technologies:
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript (no frameworks)

### 3. Memory System

The knowledge base comprised of:
- Markdown files in `/baseai/memory/memuno/documents/`
- File loading and processing logic
- Context injection into AI system prompt

### 4. OpenAI API Integration

Integration with OpenAI's API:
- Authentication using API key
- Message formatting
- Request/response handling
- Error management

## Data Flow

1. **User input** → User types a message in the web interface
2. **Client request** → Browser sends message to server via fetch API
3. **Server processing** → Express server receives request
4. **Session management** → Server retrieves or creates conversation history
5. **OpenAI request** → Server sends message and context to OpenAI API
6. **AI processing** → OpenAI processes request with memory context
7. **OpenAI response** → API returns generated response
8. **Server response** → Express sends response to client
9. **Client display** → Browser displays response to user

## Session Management

Each user conversation is tracked using:
- Unique session ID generated client-side
- Server-side session storage in memory (not persistent)
- Complete message history maintained per session

## Security Considerations

- API keys stored in environment variables
- CORS configured for security
- No sensitive data stored in client-side code
- Input validation for API endpoints

## Future Architecture Enhancements

- Database integration for persistent conversations
- User authentication system
- Vector embedding for semantic search
- Memory management API
- Real-time updates with WebSockets
```

## Customization-Guide.md

```markdown
# Customization Guide

This guide explains how to customize various aspects of the BaseAI Memory Chatbot to suit your specific needs.

## User Interface Customization

### Modifying the Look and Feel

The UI is defined in `public/index.html`. To customize the appearance:

1. **Colors**: Edit the CSS styles within the `<style>` tag:

```css
header {
  background-color: #4a4a4a; /* Change to your preferred header color */
  color: white; /* Change text color */
}

.user-message {
  background-color: #e1f5fe; /* Change user message bubble color */
}

.bot-message {
  background-color: #f1f1f1; /* Change bot message bubble color */
}

button {
  background-color: #4a4a4a; /* Change button color */
}
```

2. **Layout**: Modify the HTML structure to change the layout:

```html
<header>
  <h1>Custom Bot Name</h1> <!-- Change title -->
  <!-- Add additional elements like logo -->
</header>
```

3. **Fonts**: Add custom fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

### Adding New UI Features

1. **Markdown Support**: Add a library like `marked` to render markdown:

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
  // Update the addMessage function
  function addMessage(content, isUser) {
    // ... existing code ...
    messageElement.innerHTML = isUser ? content : marked.parse(content);
    // ... rest of code ...
  }
</script>
```

2. **Message Timestamps**: Add timestamps to messages:

```javascript
function addMessage(content, isUser) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
  
  const timestamp = new Date().toLocaleTimeString();
  messageElement.innerHTML = `
    <div class="message-content">${content}</div>
    <div class="message-timestamp">${timestamp}</div>
  `;
  
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
```

## Server Customization

### Modifying the System Prompt

Edit the system prompt in `chatbot.js` to change the chatbot's behavior:

```javascript
// Find this section
if (!sessions[sessionId]) {
  sessions[sessionId] = [
    {
      role: 'system',
      content: `Your custom system prompt here. You are a helpful assistant that...`
    },
  ];
}
```

### Changing AI Model Parameters

Adjust the OpenAI API parameters in `chatbot.js`:

```javascript
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // Change to a different model
  messages: sessions[sessionId],
  max_tokens: 2000, // Increase token limit
  temperature: 0.9, // Increase creativity (0.0-1.0)
  presence_penalty: 0.6, // Adjust topic focus
  frequency_penalty: 0.6, // Reduce repetition
});
```

### Adding Custom Endpoints

Add new API endpoints to `chatbot.js`:

```javascript
// Add memory update endpoint
app.post('/api/update-memory', (req, res) => {
  const { content, filename } = req.body;
  
  try {
    fs.writeFileSync(
      path.join(__dirname, 'baseai/memory/memuno/documents', filename),
      content
    );
    
    // Reload memory
    memoryContent = '';
    const memoryFiles = fs.readdirSync(memoryPath);
    memoryFiles.forEach(file => {
      // ... existing memory loading code
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Memory System Customization

### Alternative Memory Sources

Modify the memory loading code to use different sources:

```javascript
// Example: Load memory from a database
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

let memoryContent = '';

async function loadMemory() {
  await client.connect();
  const result = await client.query('SELECT content FROM memory_documents');
  
  result.rows.forEach(row => {
    memoryContent += row.content + '\n\n';
  });
  
  console.log('Memory loaded from database successfully!');
}

loadMemory();
```

### Memory Preprocessing

Add preprocessing for memory content:

```javascript
// Example: Add preprocessing step
function preprocessMemory(content) {
  // Remove any personal information
  content = content.replace(/\b(\d{3}-\d{3}-\d{4})\b/g, '[PHONE]');
  
  // Highlight important information
  content = content.replace(/\[IMPORTANT\](.*?)\[\/IMPORTANT\]/g, '**IMPORTANT: $1**');
  
  return content;
}

// Modify the memory loading loop
memoryFiles.forEach(file => {
  const filePath = path.join(memoryPath, file);
  if (fs.statSync(filePath).isFile() && file.endsWith('.md')) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = preprocessMemory(content);
    memoryContent += content + '\n\n';
  }
});
```

## Advanced Customizations

For more advanced customizations, consider:

1. **Database Integration**: Add MongoDB or PostgreSQL for persistent storage
2. **Authentication**: Implement user authentication with JWT
3. **Vector Search**: Add embedding-based semantic search
4. **Streaming Responses**: Implement SSE for streaming responses
5. **WebSockets**: Add real-time communication
6. **Analytics**: Track usage patterns and performance

See the [Extending Functionality](Extending-Functionality) guide for detailed implementation steps for these advanced features.
```

## Deployment-Guide.md

```markdown
# Deployment Guide

This guide walks through the process of deploying the BaseAI Memory Chatbot to various environments for production use.

## Preparing for Deployment

Before deploying, ensure:

1. Your code is fully tested
2. Environment variables are properly configured
3. Memory files are prepared and tested
4. Security considerations are addressed

## Deployment Options

### Option 1: Deploying to Heroku

1. **Install Heroku CLI**:
   ```bash
   npm install -g heroku
   ```

2. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Create Heroku app**:
   ```bash
   heroku create your-app-name
   ```

4. **Configure environment variables**:
   ```bash
   heroku config:set OPENAI_API_KEY=your_api_key_here
   ```

5. **Deploy to Heroku**:
   ```bash
   git push heroku main
   ```

6. **Open your app**:
   ```bash
   heroku open
   ```

### Option 2: Deploying to Render

1. **Sign up** for a [Render](https://render.com/) account

2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Select the repository with your chatbot

3. **Configure the service**:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**: Add `OPENAI_API_KEY`

4. **Create and deploy**

### Option 3: Deploying to DigitalOcean App Platform

1. **Sign up** for a [DigitalOcean](https://www.digitalocean.com/) account

2. **Create a new App**:
   - Connect your GitHub repository
   - Select the repository with your chatbot

3. **Configure the app**:
   - **Build Command**: `npm install`
   - **Run Command**: `npm start`
   - **Environment Variables**: Add `OPENAI_API_KEY`

4. **Review and launch**

## Self-Hosting Option

### Deploying with Docker

1. **Create a Dockerfile**:
   ```bash
   echo 'FROM node:16
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "start"]' > Dockerfile
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t baseai-memory-chatbot .
   ```

3. **Run the container**:
   ```bash
   docker run -p 3000:3000 --env-file .env baseai-memory-chatbot
   ```

### Deploying on a VPS

1. **Set up a VPS** with Ubuntu/Debian

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone your repository**:
   ```bash
   git clone https://github.com/yourusername/baseai-memory-chatbot.git
   cd baseai-memory-chatbot
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Set up environment variables**:
   ```bash
   cp .env.example .env
   nano .env  # Edit with your API key
   ```

6. **Set up PM2 process manager**:
   ```bash
   sudo npm install -g pm2
   pm2 start chatbot.js
   pm2 startup
   pm2 save
   ```

7. **Set up Nginx as a reverse proxy**:
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/chatbot
   
   # Add:
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable the site and restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/chatbot /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

9. **Set up SSL with Certbot**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment Steps

1. **Monitor performance**
2. **Set up logging** (consider using Winston or Bunyan)
3. **Implement analytics**
4. **Create backup strategy** for memory files
5. **Set up monitoring** with tools like UptimeRobot
```

## Troubleshooting.md

```markdown
# Troubleshooting

This page provides solutions to common issues you might encounter when using the BaseAI Memory Chatbot.

## Installation Issues

### Error: Cannot find module

**Problem**: When running `npm start`, you see `Error: Cannot find module 'xyz'`

**Solution**:
1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```
2. Check if the module is in `package.json`
3. Try clearing npm cache:
   ```bash
   npm cache clean --force
   npm install
   ```

### Error: EACCES: permission denied

**Problem**: Permission errors when installing or running the application

**Solution**:
1. Don't use `sudo` with npm
2. Fix npm permissions:
   ```bash
   sudo chown -R $(whoami) ~/.npm
   sudo chown -R $(whoami) ./node_modules
   ```

## API Key Issues

### Error: Authentication error

**Problem**: OpenAI API returns authentication errors

**Solution**:
1. Check that your API key is correctly set in `.env`
2. Ensure there are no spaces or quotes around the key
3. Verify the API key is still valid in your OpenAI dashboard
4. Check your OpenAI account has available credits

### Error: Invalid API key provided

**Problem**: Error message indicates invalid API key

**Solution**:
1. Generate a new API key in the OpenAI dashboard
2. Update your `.env` file with the new key
3. Restart the server

## Memory Loading Issues

### Error: Memory files not found

**Problem**: Console shows "Error loading memory files"

**Solution**:
1. Ensure the directory structure exists:
   ```bash
   mkdir -p baseai/memory/memuno/documents
   ```
2. Check that memory files have the `.md` extension
3. Verify file permissions allow reading

### Memory content not accessible

**Problem**: Chatbot doesn't seem to use information in memory files

**Solution**:
1. Check the format of your markdown files
2. Ensure the files are not too large (token limits)
3. Restart the server to reload memory
4. Check console for any error messages during loading

## Server Issues

### Error: Port already in use

**Problem**: Server won't start because the port is in use

**Solution**:
1. Change the port in `.env`:
   ```
   PORT=3001
   ```
2. Find and stop the process using the port:
   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

### Server crashes unexpectedly

**Problem**: Server stops running without clear error messages

**Solution**:
1. Check for uncaught exceptions
2. Add error handling:
   ```javascript
   process.on('uncaughtException', (err) => {
     console.error('Uncaught exception:', err);
   });
   ```
3. Implement logging for better debugging
4. Check memory usage and potential memory leaks

## Frontend Issues

### Chat interface not loading

**Problem**: Browser shows blank page or 404 error

**Solution**:
1. Ensure the server is running
2. Check browser console for JavaScript errors
3. Verify that `public/index.html` exists
4. Check that the Express static middleware is configured correctly

### Messages not sending

**Problem**: Chat interface loads but messages don't send

**Solution**:
1. Check browser console for AJAX/fetch errors
2. Verify the API endpoint URL is correct
3. Check for CORS issues
4. Test the API endpoint directly with curl or Postman

## Advanced Issues

### High latency

**Problem**: Slow response times from the chatbot

**Solution**:
1. Consider using a faster OpenAI model
2. Optimize memory content size
3. Implement caching for frequent queries
4. Check server resources (CPU, memory)

### Token limit exceeded

**Problem**: OpenAI API returns token limit errors

**Solution**:
1. Reduce the size of memory files
2. Optimize system prompt length
3. Split very large memory files into smaller ones
4. Implement chunking for large conversation histories
```

## API-Reference.md

```markdown
# API Reference

This page documents the API endpoints available in the BaseAI Memory Chatbot.

## Base URL

When running locally:
```
http://localhost:3000
```

## Endpoints

### Chat Endpoint

Sends a message to the chatbot and receives a response.

**URL**: `/api/chat`

**Method**: `POST`

**Content-Type**: `application/json`

**Request Body**:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The user's message to the chatbot |
| sessionId | string | No | A unique identifier for the conversation session (default: "default") |

**Example Request**:
```json
{
  "message": "What information do you have about project features?",
  "sessionId": "user123-session"
}
```

**Response**:

| Parameter | Type | Description |
|-----------|------|-------------|
| reply | string | The chatbot's response message |
| sessionId | string | The session ID used for the conversation |

**Example Response**:
```json
{
  "reply": "Based on my memory, the project has several key features including data processing, user authentication, and reporting capabilities. Each feature has been implemented with scalability in mind.",
  "sessionId": "user123-session"
}
```

**Error Responses**:

Status: 500 Internal Server Error
```json
{
  "error": "An error occurred while processing your request."
}
```

## Using the API

### Example with fetch (JavaScript)

```javascript
async function sendMessage(message, sessionId) {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        sessionId,
      }),
    });
    
    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Sorry, there was an error processing your request.';
  }
}
```

### Example with curl

```bash
curl -X POST \
  http://localhost:3000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{
    "message": "What information do you have about project features?",
    "sessionId": "user123-session"
  }'
```

### Example with Python requests

```python
import requests

response = requests.post(
    'http://localhost:3000/api/chat',
    json={
        'message': 'What information do you have about project features?',
        'sessionId': 'user123-session'
    }
)

data = response.json()
print(data['reply'])
```

## Rate Limiting

Currently, there are no explicit rate limits on the API, but be aware that:

1. The OpenAI API has its own rate limits
2. Excessive requests may cause performance issues
3. Future versions may implement rate limiting

## Authentication

The current API does not implement authentication. For production use, consider adding:

1. API keys
2. JWT authentication
3. OAuth 2.0

## Extending the API

To add new endpoints, modify `chatbot.js`. Example of adding a session history endpoint:

```javascript
// Add this to chatbot.js
app.get('/api/history/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  
  if (!sessions[sessionId]) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  // Return only user and assistant messages, not system
  const history = sessions[sessionId]
    .filter(msg => msg.role !== 'system')
    .map(msg => ({ role: msg.role, content: msg.content }));
  
  res.json({ history });
});
```
```

## Contributing-Guidelines.md

```markdown
# Contributing Guidelines

Thank you for considering contributing to the BaseAI Memory Chatbot! This document outlines the process for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Focus on constructive feedback
- Maintain a harassment-free experience for everyone
- Exercise empathy and kindness

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues tab
2. If not, create a new issue with:
   - A clear title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Environment details (OS, browser, Node.js version)

### Suggesting Enhancements

1. Check if the enhancement has already been suggested
2. Create a new issue with:
   - A clear title prefixed with "Enhancement:"
   - Detailed description of the proposed feature
   - Rationale for why it should be added
   - Any implementation ideas you have

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Run tests (if available)
5. Submit a pull request with:
   - A clear title
   - Detailed description of changes
   - Reference to related issues

## Development Process

### Setting Up Development Environment

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/yourusername/baseai-memory-chatbot.git
   cd baseai-memory-chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your API keys

4. Start development server:
   ```bash
   npm run dev
   ```

### Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow JavaScript best practices
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused

### Testing

When adding new features, please consider adding tests:
- Unit tests for individual functions
- Integration tests for API endpoints
- End-to-end tests for user flows

### Documentation

Please update documentation when making changes:
- Update this wiki if relevant
- Update README.md for major changes
- Add JSDoc comments to functions
- Update USAGE.md if user-facing features change

## Review Process

1. All pull requests will be reviewed by maintainers
2. Feedback will be provided on code quality, functionality, and tests
3. Changes may be requested before merging
4. Once approved, your contribution will be merged

## Recognition

All contributors will be acknowledged in the repository. We appreciate your efforts to improve this project!

## Getting Help

If you need help with the contribution process:
- Check existing documentation
- Open a new issue with your question
- Reach out to the maintainers

Thank you for making BaseAI Memory Chatbot better!
```