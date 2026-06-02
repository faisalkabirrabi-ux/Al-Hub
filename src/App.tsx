/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { ViewState } from './types';
import { HomeView } from './views/HomeView';
import { AIChatView } from './views/AIChatView';
import { PlaceholderView } from './views/PlaceholderView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={setCurrentView} />;
      case 'chat':
        return <AIChatView />;
      default:
        return <PlaceholderView view={currentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#050505] text-[#F0F0F0] font-sans overflow-hidden border-[12px] border-[#111]">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <div className="flex flex-col flex-1 h-full w-full relative z-10 bg-[#050505]">
         <TopBar currentView={currentView} />
         <main className="flex-1 overflow-y-auto w-full relative">
            {renderView()}
         </main>
      </div>
    </div>
  );
}
