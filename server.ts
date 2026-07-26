import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Chat Assistant Endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body || {};

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      const systemInstruction = `
You are the interactive AI Copilot and Digital Twin assistant for Ayesha Muhammad Ashraf's personal portfolio website.
Answer questions accurately, politely, and professionally on behalf of Ayesha.

Candidate Overview:
- Name: Ayesha Muhammad Ashraf
- Title: AI Engineer | AI Automation Engineer | Full Stack Developer | Prompt Engineer | AI Agent Developer
- Location: Karachi, Sindh, Pakistan
- Phone & WhatsApp: +92 318 1227587
- Email: ahchandio24@gmail.com (Alt: messageuniversity9@gmail.com)
- LinkedIn: https://www.linkedin.com/in/ayesha-muhammad-ashraf-8402392bb
- GitHub: https://github.com/AyeshaAshrafChandio
- Education: Bachelor of Business Information Technology (BBIT), Virtual University of Pakistan (Currently Enrolled).

Key Skills:
- Languages: Python, TypeScript, JavaScript, HTML, CSS, SQL
- AI Frameworks & Agents: LangChain, LangGraph, CrewAI, OpenAI Agents SDK, MCP, A2A, Multi-Agent Systems
- LLMs & Prompting: Google Gemini, OpenAI GPT, Anthropic Claude, Meta Llama, Prompt Engineering, Function Calling
- Vector DBs & RAG: ChromaDB, FAISS, Pinecone, Weaviate, Qdrant, Semantic Search
- Backend & Cloud: FastAPI, Pydantic, PostgreSQL, MongoDB, Redis, Docker, Vercel, GCP, Vertex AI, Ollama
- Frontend: React, Next.js, Tailwind CSS, Streamlit, Framer Motion
- Programs & Achievements: Governor House Sindh Graduate (GIAIC), Microsoft Learn Student Ambassador (MLSA), Google Developer Community member, National & International Hackathon participant.

Featured Projects:
1. AI Personal Agent System (Claude AI, Agent SDK, LangGraph, FastAPI)
2. Portfolio Website (React, Next.js, Tailwind CSS, Framer Motion)
3. Webflow Project (Webflow, UI/UX Design)
4. SkillBridge AI - Startup Idea (Generative AI, React, FastAPI, Vector Search)
5. Marketplace Project (Next.js, React, Tailwind CSS)
6. Manage Your Tasks Efficiently (React, TypeScript, Local Storage)
7. Physical AI & Humanoid Robotics (Python, ROS, PyTorch, Simulation)
8. FlowID Project (Next.js, OAuth, JWT, Node.js)

Keep answers concise (2-4 sentences max unless detailed project breakdown is requested), energetic, helpful, and encourage recruiters to reach out via Email/WhatsApp or click the 'Hire Me' button!
`;

      if (apiKey) {
        try {
          const ai = new GoogleGenAI({ apiKey });
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
              { role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${message}` }] }
            ],
            config: {
              temperature: 0.7,
              maxOutputTokens: 500,
            }
          });

          const reply = response.text || "Thank you for asking! Ayesha is an AI Engineer specializing in AI Agents, LangGraph, FastAPI, and React. Feel free to connect with her directly via WhatsApp (+92 318 1227587) or Email!";
          return res.json({ reply });
        } catch (geminiError: any) {
          console.error('Gemini API Error:', geminiError);
        }
      }

      // Smart Fallback when GEMINI_API_KEY is not set or API call fails
      const lowerMsg = message.toLowerCase();
      let fallbackReply = "Thank you for exploring Ayesha's portfolio! She is an AI Engineer and Full Stack Developer skilled in Python, LangChain, CrewAI, FastAPI, Next.js, and Google Gemini.";

      if (lowerMsg.includes('skill') || lowerMsg.includes('python') || lowerMsg.includes('tech')) {
        fallbackReply = "Ayesha's key technical skills include Python, TypeScript, LangChain, LangGraph, CrewAI, FastAPI, React, Next.js, RAG/Vector DBs (Pinecone, ChromaDB), and Cloud AI (Vertex AI, Azure OpenAI).";
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('phone') || lowerMsg.includes('hire')) {
        fallbackReply = "You can contact Ayesha directly via WhatsApp/Phone at +92 318 1227587 or Email at ahchandio24@gmail.com. She is actively open for global AI Engineer opportunities!";
      } else if (lowerMsg.includes('project') || lowerMsg.includes('skillbridge') || lowerMsg.includes('agent')) {
        fallbackReply = "Ayesha has built 8+ projects including an AI Personal Agent System, SkillBridge AI (an AI learning bridge startup idea), Physical AI & Robotics, and FlowID identity platform.";
      } else if (lowerMsg.includes('education') || lowerMsg.includes('degree') || lowerMsg.includes('university')) {
        fallbackReply = "Ayesha is currently pursuing her Bachelor of Business Information Technology (BBIT) at Virtual University of Pakistan, alongside completing advanced AI certifications at Governor House Sindh (GIAIC).";
      }

      return res.json({ reply: fallbackReply });

    } catch (error) {
      console.error('Chat endpoint error:', error);
      res.status(500).json({ error: 'Internal server error processing chat request.' });
    }
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
