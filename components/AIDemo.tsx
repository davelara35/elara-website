
import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, Bot, User, Sparkles, Calendar } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIDemo: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Hello! I'm Elara. How can I assist your practice today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      // Initialize AI right before use as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are Elara, a friendly medical AI receptionist. A user says: "${userText}". Provide a very short, professional reply as a voice assistant.`,
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm here to help manage your calls efficiently." }]);
    } catch (e) {
      // Fallback if API key is not ready or fails
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: "That sounds like a great use case. I can handle scheduling, patient inquiries, and follow-ups with ease." }]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="ai-demo" className="py-20 bg-[#050b1a]/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience the <span className="text-indigo-400">Natural</span> <br /> 
              Conversation Flow
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our AI isn't just a chatbot with a voice. It's a context-aware medical assistant that understands clinical needs, insurance terms, and patient urgency.
            </p>
            <ul className="space-y-4">
              {[
                "Natural Language Understanding",
                "Contextual Awareness",
                "Emotional Intelligence",
                "Instant Database Lookups"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="glass border rounded-3xl overflow-hidden shadow-2xl h-[450px] flex flex-col">
              <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Elara Medical AI</div>
                    <div className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Listening...
                    </div>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                      m.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="relative flex items-center gap-2">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Try asking about an appointment..."
                    className="flex-1 bg-black/40 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button 
                    onClick={handleSend}
                    className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group">
                    <Mic className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Visual Flair: Floating Cards */}
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-xl border border-white/10 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">New Booking</div>
                  <div className="text-sm font-semibold">Dr. Smith • 2:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;