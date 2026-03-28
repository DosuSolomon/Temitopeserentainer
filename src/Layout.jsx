import React, { useState } from "react";
import { createPageUrl } from "@/utils";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarInset,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Music, MessageCircle, Heart, User, ChevronDown, Share2, Youtube, Instagram, Facebook, Twitter, Globe } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import SidebarTipDialog from "./components/SidebarTipDialog";
import AboutArtistDialog from "./components/AboutArtistDialog";
import FeedbackDialog from "./components/FeedbackDialog";

export default function Layout({ children, currentPageName }) {
  const [tipOpen, setTipOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const setMenuOpen = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const navigateToPage = (page) => {
    window.location.href = createPageUrl(page);
  };

  const openExternal = (url) => {
    window.open(url, "_blank");
  };

  const isMenuOpen = (menu) => activeMenu === menu;

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => navigateToPage("Welcome")}
          >
            <Music className="h-5 w-5" />
            <span className="sr-only">Temitope Serentainer</span>
          </Button>
        </SidebarHeader>

        <SidebarContent className="p-2">

          {/* All Songs */}
          <SidebarGroup>
            <SidebarGroupLabel>All Songs</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigateToPage("RequestSong")}
                  >
                    <Music className="h-4 w-4" />
                    <span>All Songs (Total: 350)</span>
                    <SidebarMenuBadge>350</SidebarMenuBadge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          {/* Song Categories */}
          <Collapsible open={isMenuOpen('songCategories')} onOpenChange={(open) => setMenuOpen(open ? 'songCategories' : null)}>
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="flex items-center justify-between group bg-primary data-[state=open]:bg-black hover:bg-primary/90 data-[state=open]:hover:bg-black/50 cursor-pointer">
                  Song Categories
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-black data-[state=open]:text-primary group-hover:text-black data-[state=open]:group-hover:text-primary/90" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Music className="h-4 w-4" />
                        <span>FOREIGN CATEGORY</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Music className="h-4 w-4" />
                        <span>OTHER FOREIGN</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Music className="h-4 w-4" />
                        <span>NIGERIAN OLDIES</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Music className="h-4 w-4" />
                        <span>NIGERIAN MODERN</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <User className="h-4 w-4" />
                        <span>SONGS BY ARTIST</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <SidebarSeparator />

          {/* Streaming Platform */}
          <Collapsible open={isMenuOpen('streaming')} onOpenChange={(open) => setMenuOpen(open ? 'streaming' : null)}>
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="flex items-center justify-between group bg-primary data-[state=open]:bg-black hover:bg-primary/90 data-[state=open]:hover:bg-black/50 cursor-pointer">
                  Streaming Platforms
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-black data-[state=open]:text-primary group-hover:text-black data-[state=open]:group-hover:text-primary/90" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://open.spotify.com/artist/382AebD1IHIGufyl6MLOtZ?si=V94Hu1KjQbCucorTCUGNhQ")}>
                        <Music className="h-4 w-4" />
                        <span>Spotify</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://music.apple.com/us/artist/temitope-serentainer/1655629171")}>
                        <Music className="h-4 w-4" />
                        <span>Apple Music</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://music.amazon.co.uk/artists/B0BNCRWWK5/temitope-serentainer?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_2KhRUVfHDeMUwfmTS4Xrqngrz")}>
                        <Globe className="h-4 w-4" />
                        <span>Amazon Music</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://music.youtube.com/channel/UCjTslmf66LGZxe7H6kYNHbA?si=eS0Waq__-LBfNibD")}>
                        <Youtube className="h-4 w-4" />
                        <span>YouTube Music</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://audiomack.com/temitopeserentainer-")}>
                        <Music className="h-4 w-4" />
                        <span>Audiomack</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <SidebarSeparator />

          {/* Social Handles */}
          <Collapsible open={isMenuOpen('social')} onOpenChange={(open) => setMenuOpen(open ? 'social' : null)}>
            <SidebarGroup>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="flex items-center justify-between group bg-primary data-[state=open]:bg-black hover:bg-primary/90 data-[state=open]:hover:bg-black/50 cursor-pointer">
                  Social Handles
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-black data-[state=open]:text-primary group-hover:text-black data-[state=open]:group-hover:text-primary/90" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://www.instagram.com/temitopeserentainer")}>
                        <Instagram className="h-4 w-4" />
                        <span>Instagram</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://www.facebook.com/share/1AnVkwVoJt/")}>
                        <Facebook className="h-4 w-4" />
                        <span>Facebook</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://x.com/TemiSerentainer")}>
                        <Twitter className="h-4 w-4" />
                        <span>X (Twitter)</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://www.tiktok.com/@temitopeserentainer?_r=1&_t=ZS-94XmvwBpNAr")}>
                        <Share2 className="h-4 w-4" />
                        <span>Tiktok</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => openExternal("https://youtube.com/@temitopeserentainer1")}>
                        <Youtube className="h-4 w-4" />
                        <span>YouTube</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <SidebarSeparator />

          {/* About Artist */}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setAboutOpen(true)}>
                <User className="h-4 w-4" />
                <span>About Artist</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator />

          {/* Give Feedback */}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setFeedbackOpen(true)}>
                <MessageCircle className="h-4 w-4" />
                <span>Give Feedback</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setTipOpen(true)}>
                <Heart className="h-4 w-4" />
                <span>Leave a tip</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        {children}
      </SidebarInset>

      {/* Dialogs */}
      <SidebarTipDialog open={tipOpen} onOpenChange={setTipOpen} />
      <AboutArtistDialog open={aboutOpen} onOpenChange={setAboutOpen} />
      <FeedbackDialog open={feedbackOpen} onOpenChange={setFeedbackOpen} />
    </SidebarProvider>
  );
}

