import { ViewState } from '../types';
import { 
  MessageSquare, Search, PenTool, Image as ImageIcon, 
  Video, Mic, Globe, FileText, Code, ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const cards = [
    { id: 'chat', title: 'AI Chat', desc: 'Advanced conversational agent for general queries and tasks.', icon: MessageSquare },
    { id: 'search', title: 'AI Search', desc: 'Vector-based semantic indexing across live web repositories.', icon: Search },
    { id: 'writer', title: 'Smart Writer', desc: 'Draft articles, emails, marketing copy, and essays instantly.', icon: PenTool },
    { id: 'image', title: 'Vision', desc: 'Diffusion-based latents for hyper-realistic visual generation.', icon: ImageIcon },
    { id: 'coding', title: 'Code Asst', desc: 'Debug, refactor, and write multi-language code effortlessly.', icon: Code },
    { id: 'video', title: 'AI Video', desc: 'Temporal consistency for cinematic frame interpolation.', icon: Video },
    { id: 'translate', title: 'Translate', desc: 'Real-time contextual translation and localization for content.', icon: Globe },
    { id: 'voice', title: 'Audio', desc: 'Neural cloning and natural language prosody synthesis.', icon: Mic },
    { id: 'pdf', title: 'PDF Analyst', desc: 'RAG-powered document interrogation and summarization.', icon: FileText },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col md:flex-row justify-between md:items-end gap-6"
      >
        <div>
          <h2 className="text-6xl md:text-8xl font-black text-[#F0F0F0] uppercase tracking-tighter leading-none mb-2">Modules</h2>
          <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest border-l-4 border-[#00FF41] pl-3">Select processing unit</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#00FF41] font-bold">Wallet Balance</span>
          <div className="text-4xl font-light tracking-tight font-mono">1,450 <span className="text-[12px] opacity-50">CRD</span></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
             <motion.div
               key={card.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               onClick={() => onNavigate(card.id as ViewState)}
               className="border border-[#222] p-8 hover:bg-[#00FF41] hover:text-black group transition-colors cursor-pointer relative bg-[#0A0A0A] flex flex-col items-start min-h-[260px] rounded-none"
             >
               <span className="text-6xl font-black opacity-10 absolute top-4 right-4 group-hover:opacity-20 text-[#00FF41] group-hover:text-black pointer-events-none">0{idx + 1}</span>
               
               <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-[#00FF41] group-hover:text-black flex items-center gap-2">
                 <Icon className="w-4 h-4" />
                 {card.id}
               </h3>
               
               <h2 className="text-3xl font-black tracking-tighter uppercase mt-2">{card.title}</h2>
               <p className="text-[13px] mt-4 font-mono text-zinc-500 leading-relaxed group-hover:text-black/70 flex-1">{card.desc}</p>
               
               <div className="flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-black transition-colors mt-auto w-full pt-6">
                 Launch <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
               </div>
             </motion.div>
          )
        })}
      </div>
    </div>
  );
}
