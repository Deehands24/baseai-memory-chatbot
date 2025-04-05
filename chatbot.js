const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
const express = require('express');
const cors = require('cors');

// Load API key from .env.baseai
require('dotenv').config({ path: '.env.baseai' });

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Memory context
const memoryPath = path.join(__dirname, 'baseai/memory/memuno/documents');
let memoryContent = '';

// Load memory files
try {
  const memoryFiles = fs.readdirSync(memoryPath);
  memoryFiles.forEach(file => {
    const filePath = path.join(memoryPath, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.md')) {
      memoryContent += fs.readFileSync(filePath, 'utf8') + '\n\n';
    }
  });
  console.log('Memory loaded successfully!');
} catch (error) {
  console.error('Error loading memory files:', error);
}

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Explicitly set the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Add a specific route for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Chat history for each session
const sessions = {};

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId = 'default' } = req.body;
    
    // Initialize session if it doesn't exist
    if (!sessions[sessionId]) {
      sessions[sessionId] = [
        {
          role: 'system',
          content: `You are part of a gang called AI. AI is made up of AI agents that work together as one to be the most powerful AI ever built. Your job is to query the memory of AI. You tell it what and when to remember and when to recall memories. Always remember work smarter not harder.

Here is your memory context:
${memoryContent}
`
        },
      ];
    }
    
    // Add user message to history
    sessions[sessionId].push({ role: 'user', content: message });
    
    // Get response from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: sessions[sessionId],
      max_tokens: 1000,
      temperature: 0.7,
    });
    
    const reply = completion.choices[0].message.content;
    
    // Add assistant response to history
    sessions[sessionId].push({ role: 'assistant', content: reply });
    
    res.json({ reply, sessionId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Chat interface available at http://localhost:${PORT}`);
});