import { Project, SkillCategory, Certification, ExperienceItem } from '../types';
import digiskillsCloudComputingImg from '../assets/images/digiskills_cloud_computing.png';
import digiskillsMobileGameAppImg from '../assets/images/digiskills_mobile_game_app.png';
import digiskillsDataAnalyticsImg from '../assets/images/digiskills_data_analytics.png';
import digiskillsStartupStrategiesImg from '../assets/images/digiskills_startup_strategies.png';
import digiskillsAiPythonImg from '../assets/images/digiskills_ai_python.png';
import digiskillsUiuxWebflowImg from '../assets/images/digiskills_uiux_webflow.png';
import ayeshaProfilePhoto from '../assets/images/ayesha_profile_photo.png';
import giaicStudentCardImg from '../assets/images/giaic_student_card_blurred.png';
import certQuizOff2026Img from '../assets/images/cert_quizoff_2026.png';
import certPlacementPrepQuiz2026Img from '../assets/images/cert_placement_prep_quiz_2026.png';
import certGdgocCyberSecurity2026Img from '../assets/images/cert_gdgoc_cyber_security_2026.png';
import certNexusQuizBlitz2026Img from '../assets/images/cert_nexus_quiz_blitz_card.png';
import certGdgocCareerGoogle2026Img from '../assets/images/cert_gdgoc_career_google_2026.png';
import certIbmBobHackathon2026Img from '../assets/images/cert_ibm_bob_hackathon_2026.png';
import certOpenLearnAi2026Img from '../assets/images/cert_openlearn_ai_2026.png';

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
  twitterX: "https://x.com/Ayeshamv8iv",
  instagram: "https://www.instagram.com/butterflyayesha234602?cnvx=bGI0bHN3OHR2Y3o5",
  googleDeveloper: "https://me.developers.google.com/u/112418880206861072072",
  avatarUrl: ayeshaProfilePhoto,
  
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
    id: "rescue-student-project",
    title: "Rescue Student Project",
    description: "AI-powered student academic and code assistant designed to debug codebases, identify missing features, resolve errors, and help students meet tight project deadlines.",
    category: "AI & Agents",
    tags: ["AI Agents", "React", "TypeScript", "Code Debugging", "Gemini API", "Student Portal"],
    liveDemo: "https://rescue-student-project.ai.studio",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/rescue_student_project_1793526005912.jpg",
    featured: true,
    architectureDetails: "AI student rescue platform featuring intelligent code error diagnosis, automated fix generation, academic project workflow optimization, and interactive step-by-step programming assistance."
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
  },
  {
    id: "horror-game",
    title: "Horror Game",
    description: "Atmospheric interactive browser horror survival experience featuring suspenseful exploration, dynamic lighting, and immersive sound-driven gameplay.",
    category: "Games",
    tags: ["Interactive Game", "Web Game", "TypeScript", "React", "Vercel"],
    liveDemo: "https://horror-game-bice.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/horror_game_banner_1795352172070.jpg",
    featured: true,
    architectureDetails: "Browser-based horror game deployed on Vercel with responsive controls, atmospheric visual rendering, suspenseful pacing, and real-time interactive state."
  },
  {
    id: "game-sage",
    title: "Game Sage",
    description: "Interactive web strategy and adventure game experience built with modern frontend architecture, responsive game mechanics, and engaging progression.",
    category: "Games",
    tags: ["Interactive Game", "Strategy", "React", "TypeScript", "Vercel"],
    liveDemo: "https://game-sage-xi-40.vercel.app",
    githubUrl: "https://github.com/AyeshaAshrafChandio",
    image: "/src/assets/images/game_sage_banner_1795352171623.jpg",
    featured: true,
    architectureDetails: "Modern interactive web game deployed on Vercel featuring responsive gameplay mechanics, clean HUD state management, and instant browser playability."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-governor-house",
    title: "Governor House Sindh IT Initiative (GIAIC) — Enrolled Student",
    issuer: "Governor Sindh IT Initiative (GIAIC)",
    date: "Currently Enrolled (3-Year Program)",
    image: giaicStudentCardImg,
    description: "Currently studying in the 3-year Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse (GIAIC) program at Governor House Karachi (Main Campus, Batch 1, Q4 — Roll No: 00180932). Program is currently in progress.",
    credentialUrl: "https://www.governor-sindh-giaic.com"
  },
  {
    id: "cert-open-uni-ai",
    title: "An introduction to artificial intelligence",
    issuer: "The Open University (OpenLearn)",
    date: "15 July 2026",
    image: certOpenLearnAi2026Img,
    description: "Statement of participation for completing the 6-hour OpenLearn free course \"An introduction to artificial intelligence\" from The Open University, including mandatory tests (Course Code: LG003_1).",
    credentialUrl: "https://www.open.edu/openlearn/education-development/ai-matters/content-section-overview"
  },
  {
    id: "cert-digiskills-cloud-computing",
    title: "Cloud Computing",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsCloudComputingImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in Cloud Computing. Certificate ID: T5R6XFGMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-digiskills-mobile-game-app",
    title: "Mobile Game and App Development",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsMobileGameAppImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in Mobile Game and App Development. Certificate ID: XQ67CFPMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-digiskills-data-analytics",
    title: "Data Analytics and Business Intelligence",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsDataAnalyticsImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in Data Analytics and Business Intelligence. Certificate ID: 8GXDXCJMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-digiskills-startup-strategies",
    title: "Startup Strategies and Entrepreneurship",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsStartupStrategiesImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in Startup Strategies and Entrepreneurship. Certificate ID: WJJPRPBMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-digiskills-ai-python",
    title: "Artificial Intelligence using Python",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsAiPythonImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in Artificial Intelligence using Python. Certificate ID: G7JHWNBMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-digiskills-uiux-webflow",
    title: "UI/UX & Webflow",
    issuer: "DigiSkills.pk (Ignite & Virtual University)",
    date: "Nov 2026",
    image: digiskillsUiuxWebflowImg,
    description: "Completed the DigiSkills Training Program (DSTP3.0-Batch-04 Aug 2026-Oct 2026) training in UI/UX & Webflow. Certificate ID: WSEXEGPMK.",
    credentialUrl: "https://digiskills.pk/verify"
  },
  {
    id: "cert-ibm-bob-hackathon",
    title: "IBM Bob 2.0 Hackathon",
    issuer: "lablab.ai (NativelyAI)",
    date: "Sep 25 - 27, 2026",
    image: certIbmBobHackathon2026Img,
    description: "Certificate of Completion awarded for completing and submitting a solution based on AI Studio, ChatGPT, Gemini 3 Flash, and IBM in the IBM Bob 2.0 Hackathon (Sep 25 to 27, 2026). Certificate ID: CMULAQMR401G5S601JDX4P3X5."
  },
  {
    id: "cert-gdgoc-cyber-security",
    title: "3-Days Cyber Security BootCamp",
    issuer: "GDG On Campus - University Of Karachi",
    date: "2026",
    image: certGdgocCyberSecurity2026Img,
    description: "Certificate of Participation in the 3-Days Cyber Security BootCamp presented by Google Developer Group On Campus - University Of Karachi (with Way to Cyber, IEEE Computer Society Karachi Section & DCS UBIT).",
    credentialUrl: "https://verification.givemycertificate.com/v/a102fdf9-8981-4047-94e8-640708f60d6f"
  },
  {
    id: "cert-gdgoc-career-google",
    title: "Career, Challenges & Google",
    issuer: "GDG On Campus - University Of Karachi",
    date: "2026",
    image: certGdgocCareerGoogle2026Img,
    description: "Certificate of Participation in Career, Challenges & Google organized by Google Developers Group On Campus - University Of Karachi (with IEEE Computer Society & DCS UBIT)."
  },
  {
    id: "cert-quizoff-2026",
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: "CampusCrew & Unstop",
    date: "19 Jul 2026",
    image: certQuizOff2026Img,
    description: "Certificate presented for competing in QuizOff 2026: India's Biggest AI Quiz, organised by CampusCrew and hosted on Unstop (Date: 19-JULY-2026)."
  },
  {
    id: "cert-nexus-quiz-blitz",
    title: "Nexus Quiz Blitz",
    issuer: "Nexus & Unstop",
    date: "06 Sep 2026",
    image: certNexusQuizBlitz2026Img,
    description: "Certificate of Participation in Nexus Quiz Blitz organized by Nexus (Unstop Official Partner, sponsored by SkillStory by CertifyMe), issued on 06 Sep 2026."
  },
  {
    id: "cert-placement-prep-quiz",
    title: "Placement Prep Quiz 2026",
    issuer: "GLA University (GLAU) & Unstop",
    date: "2026",
    image: certPlacementPrepQuiz2026Img,
    description: "Certificate of Participation for participating in Placement Prep Quiz 2026 organised by GLA University (GLAU), Uttar Pradesh, hosted on Unstop."
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
