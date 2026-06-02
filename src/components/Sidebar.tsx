import { ViewState } from '../types';
import { 
  Home, MessageSquare, Search, PenTool, Image as ImageIcon, 
  Video, Mic, Globe, FileText, Code, CreditCard, 
  Wallet, Bell, User, Settings, Shield 
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const mainNav = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'chat', label: 'AI Chat', icon: MessageSquare },
    { id: 'search', label: 'AI Search', icon: Search },
    { id: 'writer', label: 'AI Writer', icon: PenTool },
    { id: 'image', label: 'AI Image', icon: ImageIcon },
    { id: 'video', label: 'AI Video', icon: Video },
    { id: 'voice', label: 'AI Voice', icon: Mic },
    { id: 'translate', label: 'AI Translate', icon: Globe },
    { id: 'pdf', label: 'PDF Chat', icon: FileText },
    { id: 'coding', label: 'Coding Assistant', icon: Code },
  ] as const;

  const bottomNav = [
    { id: 'subscriptions', label: 'Pro', icon: CreditCard },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'admin', label: 'Admin', icon: Shield },
  ] as const;

  const renderNav = (items: typeof mainNav | typeof bottomNav) => (
    <ul className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id as ViewState)}
              className={`w-full flex items-center gap-3 px-3 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 border-l-4 ${
                isActive 
                  ? 'bg-[#00FF41] text-black border-black' 
                  : 'text-[#F0F0F0] border-transparent hover:text-[#00FF41] hover:bg-[#111]'
              }`}
            >
              <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-black' : 'text-[#00FF41]'}`} />
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="w-64 border-r border-[#222] bg-[#050505] flex flex-col h-full z-20 shrink-0">
      <div className="p-6 flex items-center gap-3 border-b border-[#222]">
         <div className="w-8 h-8 border-2 border-[#00FF41] flex items-center justify-center">
            <span className="font-display font-bold text-[#00FF41] text-[10px]">AI</span>
         </div>
         <span className="font-display font-black text-xl tracking-tighter uppercase text-[#F0F0F0]">AI Hub</span>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <div className="text-[10px] font-bold text-[#00FF41] mb-3 px-3 uppercase tracking-[0.3em]">Features</div>
        {renderNav(mainNav)}
      </div>

      <div className="p-4 border-t border-[#222]">
        <div className="text-[10px] font-bold text-[#00FF41] mb-3 px-3 uppercase tracking-[0.3em]">System</div>
        {renderNav(bottomNav)}
      </div>
    </div>
  );
}
