import { Project, SkillCategory, Certification, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ayesha Muhammad Ashraf",
  titles: [
    "AI Engineer",
    "AI Automation Engineer",
    "Full Stack Developer",
    "Prompt Engineer",
    "AI Agent Developer"
  ],
  tagline: "Building intelligent AI Agents, autonomous workflows, and scalable full-stack web applications for global innovation.",
  location: "Karachi, Sindh, Pakistan",
  phoneWhatsApp: "+92 318 1227587",
  email: "ahchandio24@gmail.com",
  altEmail: "messageuniversity9@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ayesha-muhammad-ashraf-8402392bb",
  gitHub: "https://github.com/AyeshaAshrafChandio",
  avatarUrl: "/src/assets/images/ayesha_avatar_1785059722350.jpg",
  
  aboutMe: "I am an aspiring AI Engineer passionate about Artificial Intelligence, AI Agents, Full Stack Development, AI Automation, and Prompt Engineering. I enjoy building AI-powered applications, automation systems, SaaS products, and modern web applications while continuously learning new technologies through projects, hackathons, and open-source communities.",
  
  education: {
    degree: "Bachelor of Business Information Technology (BBIT)",
    institution: "Virtual University of Pakistan",
    status: "2nd Semester (Currently Enrolled)",
    period: "2nd Semester",
    details: "Currently in 2nd Semester, focusing on Business Information Systems, Data Analytics, Software Architecture, Database Systems, and Applied Artificial Intelligence."
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    skills: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    description: "Core languages for building AI algorithms, backend services, and interactive frontends."
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    iconName: "Terminal",
    skills: ["Git", "GitHub", "GitHub Actions", "Linux", "Bash", "VS Code", "Jupyter Notebook"],
    description: "Essential tools for version control, CI/CD pipelines, containerization, and scripting."
  },
  {
    id: "ai-llms",
    title: "AI & LLMs",
    iconName: "Cpu",
    skills: ["Prompt Engineering", "Generative AI", "Large Language Models (LLMs)", "Google Gemini", "OpenAI GPT", "Anthropic Claude", "Meta Llama", "Hugging Face"],
    description: "State-of-the-art foundation models and prompt optimization techniques."
  },
  {
    id: "ai-frameworks",
    title: "AI Frameworks",
    iconName: "Workflow",
    skills: ["LangChain", "LangGraph", "CrewAI", "OpenAI Agents SDK", "MCP", "A2A", "AI Agents", "Multi-Agent Systems"],
    description: "Autonomous agent orchestration, memory management, and multi-agent systems."
  },
  {
    id: "rag-vector",
    title: "RAG & Vector Databases",
    iconName: "Database",
    skills: ["RAG", "Embeddings", "Semantic Search", "Vector Search", "ChromaDB", "FAISS", "Pinecone", "Weaviate", "Qdrant"],
    description: "Retrieval-Augmented Generation architectures for intelligent knowledge retrieval."
  },
  {
    id: "ai-engineering",
    title: "AI Engineering & Workflows",
    iconName: "Bot",
    skills: ["Function Calling", "Tool Calling", "Context Engineering", "Prompt Chaining", "AI Workflow Automation", "AI Chatbots", "AI Copilots"],
    description: "Connecting AI models to real-world APIs, toolkits, and dynamic context windows."
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    skills: ["FastAPI", "Pydantic", "Uvicorn", "AsyncIO", "REST APIs", "JSON", "WebSockets", "JWT", "OAuth"],
    description: "High-performance asynchronous server-side microservices and auth protocols."
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Layers",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    description: "Relational, document, key-value, and real-time cloud data stores."
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Streamlit"],
    description: "Modern component-driven web frameworks and rapid interactive AI prototypes."
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    iconName: "Cloud",
    skills: ["Docker", "Vercel", "Google Cloud Platform (GCP)", "Google Vertex AI", "Azure OpenAI", "AWS Bedrock", "Ollama", "vLLM"],
    description: "Scalable cloud platforms, serverless deployments, and local LLM execution engines."
  },
  {
    id: "ml-mlops",
    title: "Machine Learning & MLOps",
    iconName: "Activity",
    skills: ["PyTorch", "TensorFlow", "MLflow", "Weights & Biases (W&B)", "Model Evaluation", "Deployment", "CI/CD"],
    description: "Model fine-tuning, training telemetry, evaluation metrics, and automated deployment."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "hunarmand-worker-app",
    title: "HunarMand Worker Web App",
    description: "Digital vocational marketplace & service platform connecting skilled blue-collar workers and craftspeople with verified client service requests.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Tailwind CSS", "Marketplace", "Worker Portal", "AI Automation"],
    liveDemo: "https://my-hunarman-worker-web-app.ai.studio",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/hunarmand_worker_app_1790335709444.jpg",
    featured: true,
    architectureDetails: "Full-stack skilled labor marketplace providing worker onboarding, digital service portfolios, skill ratings, client booking pipelines, and responsive mobile-first UI."
  },
  {
    id: "dreamhome-agent",
    title: "DreamHome AI Agent",
    description: "Autonomous real estate intelligence agent providing interactive conversational property discovery, valuation estimation, and automated viewing scheduling.",
    category: "AI & Agents",
    tags: ["AI Agents", "Google Gemini", "Cloud Run", "FastAPI", "Real Estate", "LangChain"],
    liveDemo: "https://dreamhome-agent-508342565239.asia-southeast1.run.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/dreamhome_ai_agent_1790335724519.jpg",
    featured: true,
    architectureDetails: "Deployed on Google Cloud Run with containerized FastAPI microservices and Gemini LLM. Incorporates conversational property search, multi-criteria filtering, neighborhood insights, and automated viewing appointment booking."
  },
  {
    id: "cineshield-ai",
    title: "CineShield AI",
    description: "AI-driven multimedia safety & cinematic video intelligence platform for automated content classification, age rating, and intellectual property protection.",
    category: "AI & Agents",
    tags: ["Computer Vision", "AI Safety", "Cloud Run", "Video Intelligence", "PyTorch", "FastAPI"],
    liveDemo: "https://cineshield-ai-600509928131.asia-southeast1.run.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/cineshield_ai_1790335738343.jpg",
    featured: true,
    architectureDetails: "Containerized video intelligence engine deployed on Google Cloud Run. Performs multi-modal video frame analysis, copyright risk scoring, sensitive scene detection, and automated compliance auditing."
  },
  {
    id: "ai-personal-agent-system",
    title: "AI Personal Agent System",
    description: "AI-powered personal assistant using Claude AI and Agent SDK for workflow automation, tool execution, and daily productivity management.",
    category: "AI & Agents",
    tags: ["Python", "Claude AI", "Agent SDK", "FastAPI", "LangGraph", "CrewAI"],
    liveDemo: "https://skillbridge-ai-1.ai.studio",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/ai_agent_project_1785059741756.jpg",
    featured: true,
    architectureDetails: "Built using Claude AI, OpenAI Agent SDK, and LangGraph for autonomous task routing, automated calendar management, and web search tool execution."
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, high-performance personal portfolio built with React, Next.js patterns, Tailwind CSS, Framer Motion, and embedded AI Assistant.",
    category: "Full Stack",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Express"],
    liveDemo: "https://professional-portfolio-t15d.vercel.app/",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    featured: true,
    architectureDetails: "Includes client-side interactive state, Framer Motion animations, dark/light theme persistence, interactive resume view, and Gemini API chatbot."
  },
  {
    id: "webflow-project",
    title: "Webflow Project (Snikei)",
    description: "Custom digital experience & high-converting landing page designed on Webflow platform featuring fluid layouts and custom animations.",
    category: "Webflow & Design",
    tags: ["Webflow", "UI/UX Design", "CSS3", "Animation", "Branding"],
    liveDemo: "https://snikei.webflow.io/",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    featured: false,
    architectureDetails: "Crafted on Webflow with custom CSS interactions, optimized mobile layout grid, and high aesthetic standard."
  },
  {
    id: "skillbridge-ai",
    title: "SkillBridge AI (My Startup Idea)",
    description: "AI-driven learning bridge and skill gap analytics platform connecting aspiring technical talent with active market demands.",
    category: "AI & Agents",
    tags: ["Generative AI", "React", "FastAPI", "Vector Search", "Google Gemini", "LangChain"],
    liveDemo: "https://skillbridge-ai-1.ai.studio",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    featured: true,
    architectureDetails: "Uses Gemini LLM and RAG vector search to evaluate user resumes, match skill gaps against live job markets, and generate customized AI learning paths."
  },
  {
    id: "marketplace-project",
    title: "Marketplace Project",
    description: "Technical foundation for a scalable e-commerce marketplace platform featuring catalog search, checkout flows, and responsive UI.",
    category: "Full Stack",
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs", "TypeScript"],
    liveDemo: "https://marketplace-technical-foun-git-9115bf-ayeshas-projects-d225c2ac.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80",
    featured: false,
    architectureDetails: "Full-stack marketplace architecture with server-side rendering, dynamic API routing, and optimized component hierarchy."
  },
  {
    id: "manage-your-tasks-efficiently",
    title: "Manage Your Tasks Efficiently",
    description: "Full-stack productive task management and workflow organizing application with drag-and-drop support, priority filters, and analytics.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Motion"],
    liveDemo: "https://frontend-nine-inky-32.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    featured: false,
    architectureDetails: "Client-side task management dashboard with priority sorting, search indexing, status counters, and subtle animations."
  },
  {
    id: "physical-ai-humanoid-robotics",
    title: "Physical AI & Humanoid Robotics",
    description: "Research and simulation portal for physical AI systems, embodied AI agents, robotics spatial intelligence, and computer vision control.",
    category: "AI & Agents",
    tags: ["Python", "ROS", "PyTorch", "Computer Vision", "Simulation", "Physical AI"],
    liveDemo: "https://2025q4.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    featured: true,
    architectureDetails: "Focuses on spatial AI, sensor fusion, PyTorch neural networks for robot kinematic prediction, and visual simulation displays."
  },
  {
    id: "flowid-project",
    title: "FlowID Project",
    description: "Identity flow management & verification architecture for automated user authentication, security tokens, and permission workflows.",
    category: "Automation",
    tags: ["Next.js", "OAuth", "JWT", "Node.js", "Tailwind CSS", "Security"],
    liveDemo: "https://flowid-q-git-vercel-react-serv-cd48bb-ayeshas-projects-d225c2ac.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    featured: false,
    architectureDetails: "Secure identity verification workflow with JWT token issuing, multi-factor authentication steps, and automated identity audit logs."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-governor-house",
    title: "Governor House Sindh Graduate Certificate",
    issuer: "Governor Sindh IT Initiative (GIAIC)",
    date: "2024 - 2025",
    image: "/src/assets/images/cert_governor_house_1785059758020.jpg",
    description: "Prestigious certification in Generative AI, Web3, Agentic Workflows, and Cloud Native Microservices from the Governor Sindh IT Initiative.",
    credentialUrl: "https://www.governor-sindh-giaic.com"
  },
  {
    id: "cert-open-uni-it",
    title: "Open University Information Technology Certificate",
    issuer: "Virtual University / Open University Tech Division",
    date: "2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive qualification covering Information Technology principles, database systems, software design patterns, and network fundamentals.",
    credentialUrl: "https://www.vu.edu.pk"
  },
  {
    id: "cert-open-uni-ai",
    title: "Open University Artificial Intelligence Certificate",
    issuer: "Open University AI Research Division",
    date: "2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    description: "Specialized certification in Machine Learning algorithms, Deep Learning frameworks, Natural Language Processing, and Agent SDKs.",
    credentialUrl: "https://www.vu.edu.pk"
  }
];

export const EXPERIENCE_ACHIEVEMENTS: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "AI Personal Agents & Workflow Engineering",
    type: "AI Projects",
    organization: "Independent & Open Source Innovation",
    period: "2024 - Present",
    description: "Architecting autonomous multi-agent systems using CrewAI, LangChain, and LangGraph.",
    highlights: [
      "Built multi-agent pipelines with dynamic tool calling and function routing.",
      "Integrated vector retrieval (ChromaDB, Pinecone) for accurate domain context.",
      "Engineered automated agent copilot interfaces deployed on cloud infrastructure."
    ],
    badge: "Core AI Focus"
  },
  {
    id: "exp-2",
    title: "AI Automation Specialist",
    type: "AI Automation",
    organization: "Client Workflows & SaaS Development",
    period: "2024 - Present",
    description: "Automating repetitive business processes through LLM function calling and custom API webhooks.",
    highlights: [
      "Designed prompt chains and function calling logic to parse unstructured data into structured JSON.",
      "Deployed automated task bots and email parsing routines saving over 20+ hours weekly.",
      "Integrated Google Gemini, Claude AI, and OpenAI GPT APIs for seamless workflow triggers."
    ],
    badge: "Automation"
  },
  {
    id: "exp-3",
    title: "Full Stack AI App Development",
    type: "Full Stack",
    organization: "Web Applications & Startup Prototypes",
    period: "2023 - Present",
    description: "Building responsive, modern full-stack web applications with Next.js, React, FastAPI, and Tailwind CSS.",
    highlights: [
      "Developed 11+ full-stack and AI production applications with fast loading speeds.",
      "Implemented clean glassmorphism UI/UX designs with responsive mobile support.",
      "Integrated secure authentication (OAuth, JWT) and real-time database endpoints."
    ],
    badge: "Full Stack"
  },
  {
    id: "exp-4",
    title: "Hackathon Competitor & Award Winner",
    type: "Hackathons",
    organization: "National & International AI Hackathons",
    period: "2024 - Present",
    description: "Participating in fast-paced global hackathons solving real-world challenges with generative AI.",
    highlights: [
      "Built prototype AI solutions under tight 24-48 hour hackathon windows.",
      "Pitched AI startup concept 'SkillBridge AI' for AI-driven skill gap matching.",
      "Recognized for innovative prompt engineering and multi-agent system execution."
    ],
    badge: "Hackathons"
  },
  {
    id: "exp-5",
    title: "Microsoft Learn Student Ambassador",
    type: "Community & Ambassadorship",
    organization: "Microsoft Student Developer Community",
    period: "2024 - Present",
    description: "Leading peer learning initiatives, technical workshops, and promoting Azure AI technologies.",
    highlights: [
      "Hosted workshops on Azure OpenAI, GitHub Copilot, and modern AI engineering.",
      "Mentored student developers entering the AI and Full Stack software domains.",
      "Contributed to global tech ambassador networks and collaborative coding events."
    ],
    badge: "MLSA"
  },
  {
    id: "exp-6",
    title: "Google Developer Community Member",
    type: "Community & Ambassadorship",
    organization: "GDG & Google Cloud Communities",
    period: "2023 - Present",
    description: "Active contributor and community participant in Google Developer Groups and AI forums.",
    highlights: [
      "Regularly exploring Google Gemini API, Vertex AI, and GCP developer tools.",
      "Collaborating on open-source repositories and AI Agent experiments.",
      "Promoting inclusive tech education and AI empowerment across Pakistan."
    ],
    badge: "GDG"
  }
];

export const STATS = [
  { label: "AI Agents & Projects", value: "11+", color: "from-cyan-500 to-blue-500" },
  { label: "Tech Stack Tools", value: "35+", color: "from-emerald-500 to-teal-500" },
  { label: "Hackathons & Programs", value: "5+", color: "from-violet-500 to-purple-500" },
  { label: "Certifications", value: "3", color: "from-amber-500 to-orange-500" }
];
