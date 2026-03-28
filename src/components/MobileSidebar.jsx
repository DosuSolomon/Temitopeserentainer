import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';
import { X, Music, User, Youtube, Instagram, Facebook, Twitter, Share2, MessageCircle, Heart, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SidebarTipDialog from './SidebarTipDialog';
import AboutArtistDialog from './AboutArtistDialog';
import FeedbackDialog from './FeedbackDialog';

export default function MobileSidebar() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  const navigate = useNavigate();
  const [tipOpen, setTipOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [feedbackOpen, setFeedbackOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const setMenuOpen = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openExternal = (url) => {
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={closeSidebar}
      />
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-80 bg-black/80 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out translate-x-0 shadow-2xl border-r border-white/20 drop-shadow-2xl">
        {/* Header with close */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-white hover:bg-white/10 p-0"
              onClick={closeSidebar}
            >
              <Music className="h-5 w-5" />
            </Button>
            <div
              className="text-white font-bold cursor-pointer hover:text-white/90 transition-colors text-base leading-tight"
              onClick={() => {
                navigate("/welcome");
                closeSidebar();
              }}
            >
              Temitope
              <br />
              Serentainer
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-white hover:bg-white/10"
            onClick={closeSidebar}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-5rem)] text-white">
          {/* All Songs */}
          <div className="mb-6">
            <Button
              className="w-full justify-start text-left h-14 text-white hover:bg-white/10 mb-2 drop-shadow-lg"
              onClick={() => {
                navigate("/RequestSong");
                closeSidebar();
              }}
            >
              <Music className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>All Songs</span>
              <div className="ml-auto bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">
                350
              </div>
            </Button>
          </div>

          {/* Song Categories */}
          <div className="mb-6">
            <Collapsible open={activeMenu === 'songCategories'} onOpenChange={(open) => setMenuOpen(open ? 'songCategories' : null)}>
              <CollapsibleTrigger asChild>
                <div className="text-xs font-medium uppercase text-white mb-3 tracking-wider px-1 drop-shadow-md flex items-center justify-between group cursor-pointer bg-primary hover:bg-primary/90 rounded-md py-5 px-4 data-[state=open]:bg-black data-[state=open]:hover:bg-black/50">
                  Song Categories
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[4%] data-[state=open]:slide-in-from-top-[4%]">
                {[
                  "FOREIGN CATEGORY",
                  "OTHER FOREIGN",
                  "NIGERIAN OLDIES",
                  "NIGERIAN MODERN",
                ].map((cat) => (
                  <Button
                    key={cat}
                    className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm drop-shadow-md"
                  >
                    <Music className="h-4 w-4 mr-3 flex-shrink-0" />
                    {cat}
                  </Button>
                ))}
                <Button className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm drop-shadow-md">
                  <User className="h-4 w-4 mr-3 flex-shrink-0" />
                  SONGS BY ARTIST
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Streaming */}
          <div className="mb-6">
            <Collapsible open={activeMenu === 'streaming'} onOpenChange={(open) => setMenuOpen(open ? 'streaming' : null)}>
              <CollapsibleTrigger asChild>
                <div className="text-xs font-medium uppercase text-white mb-3 tracking-wider px-1 drop-shadow-md flex items-center justify-between group cursor-pointer bg-primary hover:bg-primary/90 rounded-md py-5 px-4 data-[state=open]:bg-black data-[state=open]:hover:bg-black/50">
                  Streaming Platforms
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[4%] data-[state=open]:slide-in-from-top-[4%]">
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal(
                      "https://open.spotify.com/artist/382AebD1IHIGufyl6MLOtZ",
                    )
                  }
                >
                  <Music className="h-4 w-4 mr-3 flex-shrink-0" />
                  Spotify
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal(
                      "https://music.apple.com/us/artist/temitope-serentainer/1655629171",
                    )
                  }
                >
                  <Music className="h-4 w-4 mr-3 flex-shrink-0" />
                  Apple Music
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal("https://music.amazon.co.uk/artists/B0BNCRWWK5")
                  }
                >
                  <Globe className="h-4 w-4 mr-3 flex-shrink-0" />
                  Amazon Music
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal(
                      "https://music.youtube.com/channel/UCjTslmf66LGZxe7H6kYNHbA",
                    )
                  }
                >
                  <Youtube className="h-4 w-4 mr-3 flex-shrink-0" />
                  YouTube Music
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm drop-shadow-md"
                  onClick={() =>
                    openExternal("https://audiomack.com/temitopeserentainer-")
                  }
                >
                  <Music className="h-4 w-4 mr-3 flex-shrink-0" />
                  Audiomack
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Social */}
          <div className="mb-10">
            <Collapsible open={activeMenu === 'social'} onOpenChange={(open) => setMenuOpen(open ? 'social' : null)}>
              <CollapsibleTrigger asChild>
                <div className="text-xs font-medium uppercase text-white mb-3 tracking-wider px-1 drop-shadow-md flex items-center justify-between group cursor-pointer bg-primary hover:bg-primary/90 rounded-md py-5 px-4 data-[state=open]:bg-black data-[state=open]:hover:bg-black/50">
                  Social Handles
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 ml-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[4%] data-[state=open]:slide-in-from-top-[4%]">
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal("https://www.instagram.com/temitopeserentainer")
                  }
                >
                  <Instagram className="h-4 w-4 mr-3 flex-shrink-0" />
                  Instagram
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal("https://www.facebook.com/share/1AnVkwVoJt/")
                  }
                >
                  <Facebook className="h-4 w-4 mr-3 flex-shrink-0" />
                  Facebook
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() => openExternal("https://x.com/TemiSerentainer")}
                >
                  <Twitter className="h-4 w-4 mr-3 flex-shrink-0" />X (Twitter)
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm mb-1 drop-shadow-md"
                  onClick={() =>
                    openExternal("https://www.tiktok.com/@temitopeserentainer")
                  }
                >
                  <Share2 className="h-4 w-4 mr-3 flex-shrink-0" />
                  TikTok
                </Button>
                <Button
                  className="w-full justify-start text-left h-12 text-white hover:bg-white/10 text-sm drop-shadow-md"
                  onClick={() =>
                    openExternal("https://youtube.com/@temitopeserentainer1")
                  }
                >
                  <Youtube className="h-4 w-4 mr-3 flex-shrink-0" />
                  YouTube
                </Button>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* About & Feedback */}
          <Button
            className="w-full h-14 text-left text-white hover:bg-white/10 mb-4 text-sm drop-shadow-lg"
            onClick={() => setAboutOpen(true)}
          >
            <User className="h-4 w-4 mr-3 flex-shrink-0" />
            About Artist
          </Button>
          <Button
            className="w-full h-14 text-left text-white hover:bg-white/10 mb-10 text-sm drop-shadow-lg"
            onClick={() => setFeedbackOpen(true)}
          >
            <MessageCircle className="h-4 w-4 mr-3 flex-shrink-0" />
            Give Feedback
          </Button>

          {/* Leave a Tip */}
          <div className="mt-auto pt-14 pb-6 border-t border-white/10 relative">
            <Button
              className="w-full h-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-2xl hover:from-pink-600 hover:to-purple-700 drop-shadow-2xl"
              onClick={() => setTipOpen(true)}
            >
              <Heart className="h-5 w-5 mr-3 flex-shrink-0" />
              Leave a Tip
            </Button>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <SidebarTipDialog open={tipOpen} onOpenChange={setTipOpen} />
      <AboutArtistDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <FeedbackDialog open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </>
  );
}

