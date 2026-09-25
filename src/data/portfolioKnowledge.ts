export function generatePortfolioKnowledgeResponse(message: string): string {
  const q = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|salam|assalam|greetings|hola)\b/i.test(q)) {
    return "Hello! I am Ayesha Muhammad Ashraf's AI Assistant. Ayesha is an AI Engineer and Full Stack Developer specializing in AI Agents (CrewAI, LangGraph), LLM Workflows (Gemini, Claude, GPT), and modern web platforms. How can I help you today?";
  }

  // Specific Project: HunarMand Worker Web App
  if (q.includes('hunar') || q.includes('worker') || q.includes('labor') || q.includes('artisan')) {
    return "The 'HunarMand Worker Web App' is a digital vocational marketplace connecting skilled craftspeople and blue-collar professionals with verified clients. It features verified skills, portfolio showcases, and direct service booking. Live demo: https://my-hunarman-worker-web-app.ai.studio";
  }

  // Specific Project: DreamHome AI Agent
  if (q.includes('dreamhome') || q.includes('dream home') || q.includes('real estate') || q.includes('property')) {
    return "'DreamHome AI Agent' is an autonomous real estate intelligence agent deployed on Google Cloud Run. Powered by Gemini LLM and FastAPI, it delivers conversational property discovery, valuation estimations, and automated viewing scheduling. Live demo: https://dreamhome-agent-508342565239.asia-southeast1.run.app";
  }

  // Specific Project: CineShield AI
  if (q.includes('cineshield') || q.includes('cine') || q.includes('movie') || q.includes('video safety') || q.includes('moderation') || q.includes('copyright')) {
    return "'CineShield AI' is an AI-driven multimedia safety and video intelligence platform hosted on Google Cloud Run. It uses computer vision and audio-visual models for automated content moderation, age rating, and intellectual property protection. Live demo: https://cineshield-ai-600509928131.asia-southeast1.run.app";
  }

  // Specific Project: SkillBridge AI
  if (q.includes('skillbridge') || q.includes('startup')) {
    return "'SkillBridge AI' is Ayesha's AI startup concept and hackathon project. It utilizes RAG vector search and LLMs to evaluate resumes, uncover skill gaps against active job markets, and curate personalized AI learning paths. Live demo: https://skillbridge-ai-1.ai.studio";
  }

  // Specific Project: AI Personal Agent System
  if (q.includes('personal agent') || q.includes('claude') || q.includes('agent sdk')) {
    return "'AI Personal Agent System' is an autonomous productivity assistant built with Claude AI, OpenAI Agent SDK, LangGraph, and FastAPI for automated schedule routing, web tool calling, and workflow task orchestration.";
  }

  // Specific Project: Robotics & Physical AI
  if (q.includes('robot') || q.includes('physical ai') || q.includes('humanoid') || q.includes('ros')) {
    return "'Physical AI & Humanoid Robotics' is a research and simulation portal focusing on spatial AI, ROS, computer vision, and PyTorch kinematic models for embodied robotic agents. Live demo: https://2025q4.vercel.app";
  }

  // Specific Project: FlowID
  if (q.includes('flowid') || q.includes('auth') || q.includes('jwt') || q.includes('identity')) {
    return "'FlowID' is an automated identity verification and authentication architecture supporting OAuth, JWT security tokens, and permission workflows. Live demo: https://flowid-q-git-vercel-react-serv-cd48bb-ayeshas-projects-d225c2ac.vercel.app";
  }

  // All Projects / Portfolio query
  if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('built')) {
    return "Ayesha has built 11+ production projects across AI & Full-Stack, including: 1) HunarMand Worker Web App, 2) DreamHome AI Agent (Cloud Run), 3) CineShield AI (Cloud Run), 4) SkillBridge AI, 5) AI Personal Agent System, 6) Physical AI & Robotics, and 7) FlowID. Explore the Projects section above for live interactive demos!";
  }

  // AI Frameworks & Multi-Agent systems
  if (q.includes('agent') || q.includes('crewai') || q.includes('langchain') || q.includes('langgraph') || q.includes('mcp') || q.includes('copilot')) {
    return "Ayesha specializes in Agentic AI architectures including LangGraph, CrewAI, LangChain, OpenAI Agents SDK, Model Context Protocol (MCP), and multi-agent coordination with dynamic tool calling and stateful memory.";
  }

  // Technical Skills & Languages
  if (q.includes('skill') || q.includes('python') || q.includes('typescript') || q.includes('fastapi') || q.includes('react') || q.includes('stack') || q.includes('tech') || q.includes('rag') || q.includes('vector')) {
    return "Ayesha's technical stack spans: Python, TypeScript, FastAPI, React, Next.js, Tailwind CSS, LangChain, LangGraph, CrewAI, ChromaDB, FAISS, Pinecone, Google Cloud Run, Vertex AI, Docker, and PyTorch.";
  }

  // Contact & Hiring
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('reach') || q.includes('interview')) {
    return "Ayesha is open for global AI Engineer and Full Stack Developer roles! You can contact her directly via WhatsApp/Phone at +92 318 1227587 or email her at ahchandio24@gmail.com (Alt: messageuniversity9@gmail.com). You can also click the 'Hire Me' button in the navigation!";
  }

  // Education & University
  if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('bbit') || q.includes('study') || q.includes('school') || q.includes('semester')) {
    return "Ayesha is currently in her 2nd Semester of Bachelor of Business Information Technology (BBIT) at the Virtual University of Pakistan, focusing on Business Information Systems, Data Analytics, and Applied AI.";
  }

  // Certifications
  if (q.includes('certificate') || q.includes('cert') || q.includes('governor') || q.includes('giaic')) {
    return "Ayesha holds the Governor House Sindh Graduate Certificate in Generative AI & Web3 (GIAIC), plus Open University credentials in Artificial Intelligence and Information Technology.";
  }

  // Experience & Hackathons
  if (q.includes('experience') || q.includes('hackathon') || q.includes('mlsa') || q.includes('ambassador') || q.includes('gdg') || q.includes('community')) {
    return "Ayesha is an active Microsoft Learn Student Ambassador (MLSA), Google Developer Community member, and regular competitor in national & international AI hackathons, where she innovates with rapid AI agent prototypes.";
  }

  // Resume / CV
  if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
    return "You can view and print Ayesha's official resume by clicking the 'Download CV' button in the top navigation bar or the Hero section!";
  }

  // Default response
  return "Ayesha Muhammad Ashraf is an AI Engineer and Full Stack Developer from Karachi, Pakistan, specializing in autonomous AI Agents, Google Gemini/LLMs, FastAPI, and React. Reach out via WhatsApp (+92 318 1227587) or Email (ahchandio24@gmail.com)!";
}
