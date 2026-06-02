import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AIChatView() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', content: 'Hello! I am your AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        role: 'ai', 
        content: 'This is a simulated UI response built inside the Hub. If you need live AI capabilities such as text generation, request a real integration with the Gemini SDK.' 
      }]);
    }, 1200);
  }

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto bg-[#050505] border-x border-[#222] relative">
       <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-8">
         {messages.map((msg) => (
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             key={msg.id} 
             className={`flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
           >
              <div className={`w-12 h-12 flex items-center justify-center shrink-0 border-2 rounded-none ${msg.role === 'user' ? 'bg-black border-[#00FF41]' : 'bg-[#111] border-[#222]'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-[#00FF41]" /> : <Bot className="w-5 h-5 text-[#F0F0F0]" />}
              </div>
              <div className={`px-8 py-6 max-w-[85%] border-l-4 rounded-none ${msg.role === 'user' ? 'bg-[#00FF41] text-black border-black' : 'bg-[#111] text-[#F0F0F0] border-[#00FF41]'}`}>
                 <p className="text-[13px] font-mono leading-relaxed whitespace-pre-wrap uppercase tracking-wider">{msg.content}</p>
              </div>
           </motion.div>
         ))}
         
         {isTyping && (
           <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex gap-6"
           >
             <div className="w-12 h-12 flex items-center justify-center shrink-0 border-2 rounded-none bg-[#111] border-[#222]">
               <Bot className="w-5 h-5 text-[#F0F0F0]" />
             </div>
             <div className="px-8 py-6 max-w-[85%] border-l-4 rounded-none bg-[#111] text-[#F0F0F0] border-[#00FF41] flex gap-3 items-center">
               <div className="w-2.5 h-2.5 rounded-none bg-[#00FF41] animate-pulse" style={{ animationDelay: '0ms' }} />
               <div className="w-2.5 h-2.5 rounded-none bg-[#00FF41] animate-pulse" style={{ animationDelay: '150ms' }} />
               <div className="w-2.5 h-2.5 rounded-none bg-[#00FF41] animate-pulse" style={{ animationDelay: '300ms' }} />
             </div>
           </motion.div>
         )}
         <div ref={endRef} />
       </div>

       <div className="p-6 md:p-8 bg-[#0A0A0A] border-t border-[#222] sticky bottom-0">
         <div className="relative flex items-center bg-[#111] border-2 border-[#222] focus-within:border-[#00FF41] transition-colors rounded-none">
            <div className="p-5 text-[#00FF41] shrink-0 border-r border-[#222]">
               <Sparkles className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="INPUT QUERY ALGORITHM..."
              className="flex-1 bg-transparent border-none py-5 px-6 text-[13px] font-mono uppercase tracking-[0.2em] text-[#F0F0F0] focus:outline-none placeholder:text-zinc-600"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className={`px-8 py-4 mr-2 font-bold uppercase tracking-[0.2em] text-[11px] transition-all border ${input.trim() ? 'bg-[#00FF41] text-black border-transparent hover:bg-white focus:text-black' : 'text-[#333] border-[#222] cursor-not-allowed'}`}
            >
               Execute
            </button>
         </div>
         <div className="flex justify-between items-center mt-4 px-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">SYSTEM NOTE: Neural outputs are synthesized. Verify integrity.</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FF41]">PING: 24MS</p>
         </div>
       </div>
    </div>
  );
}
