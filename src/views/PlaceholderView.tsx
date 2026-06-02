import { motion } from 'motion/react';
import { ViewState } from '../types';
import { Search, PenTool, Image as ImageIcon, Video, Mic, Globe, FileText, Code, CreditCard, Wallet, Bell, User, Settings, Shield } from 'lucide-react';

interface PlaceholderViewProps {
  view: ViewState;
}

export function PlaceholderView({ view }: PlaceholderViewProps) {
  const iconMap: Record<string, any> = {
    search: Search, writer: PenTool, image: ImageIcon, video: Video, 
    voice: Mic, translate: Globe, pdf: FileText, coding: Code,
    subscriptions: CreditCard, wallet: Wallet, notifications: Bell,
    profile: User, settings: Settings, admin: Shield
  };

  const Icon = iconMap[view] || Settings;

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-[#F0F0F0] bg-[#050505]">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-32 h-32 border-4 border-[#00FF41] bg-[#111] flex items-center justify-center mb-8 relative group rounded-none"
      >
        <div className="absolute inset-0 bg-[#00FF41] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></div>
        <Icon className="w-12 h-12 text-[#00FF41] group-hover:text-black relative z-10 transition-colors" />
      </motion.div>
      <motion.h2 
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.1 }}
         className="text-6xl md:text-8xl font-black text-[#F0F0F0] mb-6 uppercase tracking-tighter leading-none"
      >
         {view.replace('-', ' ')}
      </motion.h2>
      <motion.div 
         initial={{ y: 10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.15 }}
         className="inline-flex items-center px-4 py-2 bg-[#00FF41] text-black font-bold uppercase tracking-[0.3em] text-[10px] mb-8"
      >
        <Shield className="w-4 h-4 mr-2" /> System Module Locked
      </motion.div>
      <motion.p 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl text-zinc-500 font-mono text-sm uppercase tracking-wider leading-relaxed"
      >
        This module represents the <span className="text-[#00FF41] font-bold">{view}</span> segment of the React translation for your requested AI Hub architecture. Complete implementation pending authorization.
      </motion.p>
    </div>
  )
}
