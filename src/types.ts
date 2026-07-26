export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'AI & Agents' | 'Full Stack' | 'Webflow & Design' | 'Automation';
  tags: string[];
  liveDemo?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
  architectureDetails?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  type: 'AI Projects' | 'AI Automation' | 'Full Stack' | 'Hackathons' | 'Community & Ambassadorship';
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  interest: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
