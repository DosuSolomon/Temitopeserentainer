import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HamburgerButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="fixed top-4 left-4 z-[100] flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full bg-black/80 text-white hover:bg-black/90 border-2 border-white/20 shadow-2xl p-0"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <div 
        className="text-white font-bold cursor-pointer hover:text-white/90 transition-colors text-lg leading-tight hidden lg:inline"
        onClick={() => window.location.href = '/'}
      >
        Temitope<br />
        Serentainer
      </div>
    </div>
  );
}

