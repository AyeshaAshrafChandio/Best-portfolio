import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, MessageSquare, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIChatBotProps {
  darkMode: boolean;
}

export const AIChatBot: React.FC<AIChatBotProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hi! I'm Ayesha's AI Copilot. Ask me anything about Ayesha's AI skills, projects, LangChain experience, or job qualifications!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: messages }),
      });

      const data = await response.json();
      const replyText = data.reply || "Thank you for asking! Ayesha is an AI Engineer with expertise in Python, LangGraph, FastAPI, and React. Reach out via WhatsApp (+92 318 1227587) or Email!";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "Ayesha is an AI Engineer & Full Stack Developer skilled in Python, LangGraph, CrewAI, FastAPI, Next.js, and Google Gemini API. Connect with her directly on WhatsApp: +92 318 1227587!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    "What AI agent frameworks does she use?",
    "Tell me about SkillBridge AI startup idea",
    "How can I hire Ayesha?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Launch Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all cursor-pointer"
        >
          <div className="relative">
            <Bot className="w-5 h-5 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
          </div>
          <span>Ask Ayesha AI</span>
          <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
        </button>
      )}

      {/* Chat Drawer Widget */}
      {isOpen && (
        <div className={`w-80 sm:w-96 h-[500px] rounded-2xl border flex flex-col justify-between shadow-2xl overflow-hidden animate-fadeIn ${
          darkMode ? 'bg-slate-900/95 border-slate-800 text-white backdrop-blur-lg' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Ayesha's AI Twin</h4>
                <p className="text-[10px] text-cyan-100 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Powered by Gemini API
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-[80%] p-3 rounded-2xl space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none'
                    : darkMode
                    ? 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none'
                    : 'bg-slate-100 text-slate-800 rounded-bl-none'
                }`}>
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className="text-[9px] opacity-60 block text-right font-mono">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-slate-400">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <span className="animate-pulse">Ayesha AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sample Questions Chips */}
          {messages.length < 3 && (
            <div className="px-3 py-2 border-t border-slate-800/60 flex flex-wrap gap-1.5 bg-slate-950/40">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputMessage(q);
                  }}
                  className="text-[10px] px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-left cursor-pointer truncate max-w-full"
                >
                  💡 {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800/80 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about Ayesha's AI experience..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className={`flex-1 px-3 py-2 rounded-xl border text-xs outline-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-cyan-500'
              }`}
            />
            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
