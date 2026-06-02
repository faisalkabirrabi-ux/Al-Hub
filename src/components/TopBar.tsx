import { ViewState } from '../types';
import { Bell, Search } from 'lucide-react';

interface TopBarProps {
  currentView: ViewState;
}

export function TopBar({ currentView }: TopBarProps) {
  const viewTitles: Record<ViewState, string> = {
    home: 'Dashboard',
    chat: 'AI Chat',
    search: 'AI Search',
    writer: 'AI Writer',
    image: 'AI Image Generator',
    video: 'AI Video Generator',
    voice: 'AI Voice Engine',
    translate: 'Universal Translate',
    pdf: 'PDF Document Chat',
    coding: 'Coding Assistant',
    subscriptions: 'Subscriptions & Upgrades',
    wallet: 'Credits Wallet',
    notifications: 'Notifications',
    profile: 'User Profile',
    settings: 'Platform Settings',
    admin: 'Admin Console'
  };

  return (
    <header className="h-20 bg-[#0A0A0A] border-b border-[#222] flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
       <div className="flex flex-col">
         <span className="text-[10px] uppercase tracking-[0.3em] text-[#00FF41] font-bold">System Status: Operational</span>
         <h1 className="font-display text-4xl font-black text-[#F0F0F0] uppercase tracking-tighter leading-none mt-1">
           {viewTitles[currentView]}
         </h1>
       </div>
       
       <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 text-[#00FF41] absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="bg-[#111] border border-[#222] py-2 pl-9 pr-4 text-[11px] font-mono uppercase tracking-[0.2em] focus:outline-none focus:border-[#00FF41] text-[#00FF41] w-64 placeholder:text-zinc-600 transition-all rounded-none"
            />
          </div>
          <button className="w-10 h-10 flex items-center justify-center border border-[#222] hover:border-[#00FF41] hover:text-[#00FF41] text-zinc-400 transition-colors relative rounded-none">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FF41] border-[2px] border-[#0A0A0A]"></span>
          </button>
          <div className="w-10 h-10 bg-[#222] text-white flex justify-center items-center text-[10px] font-bold border border-[#222] rounded-none">
            USER
          </div>
       </div>
    </header>
  );
}
