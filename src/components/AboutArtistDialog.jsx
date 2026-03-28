import React from "react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Share2 } from "lucide-react";

const openExternal = (url) => window.open(url, "_blank");

export default function AboutArtistDialog({ open, onOpenChange }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="p-0 h-[66.3vh] w-[100vw] max-w-4xl rounded-t-3xl border-0 bg-white shadow-2xl"
      >
        <div className="mx-auto mt-4 w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-200" />

        <div className="flex flex-col h-full">
          <Tabs defaultValue="about" className="flex-1 h-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                value="bookings"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              >
                Bookings
              </TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-hidden flex flex-col">
              <TabsContent
                value="about"
                className="flex-1 overflow-y-auto p-6 space-y-6"
              >
                <div className="prose prose-lg max-w-none leading-relaxed text-gray-800 text-left md:text-justify space-y-1 md:space-y-4">
                  <p className="text-sm md:text-lg">
                    <strong>Temitope Serentainer</strong> is Nigeria's first
                    One-Girl Solo Live Musician (often described as a One-Man
                    Band).
                  </p>
                  <p className="text-sm md:text-lg">
                    Since 2018, this gifted singer-guitarist has captivated
                    audiences with soulful solo performances, seamlessly
                    blending genres such as Country, Pop, Afrosounds, Soul, and
                    Jazz into a unique and engaging live experience.
                  </p>
                  <p className="text-sm md:text-lg">
                    Her stage name <strong>Serentainer</strong> — a creative
                    fusion of Serenader and Entertainer — reflects her musical
                    journey from intimate serenades to full-scale live
                    entertainment that connects deeply with audiences.
                  </p>
                  <p className="text-sm md:text-lg">
                    Beyond the stage, Temitope Serentainer is also a songwriter,
                    producer, and recording artist, with a growing catalogue of
                    beautiful original songs available on major streaming
                    platforms.
                  </p>
                </div>

                {/* Music Platforms - Single Line */}
                <div className="px-6 pt-4 pb-2">
                  <div className="flex flex-wrap justify-center items-end gap-6 md:gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://open.spotify.com/artist/382AebD1IHIGufyl6MLOtZ?si=V94Hu1KjQbCucorTCUGNhQ",
                        )
                      }
                    >
                      <img
                        src="/src/images/spotify.png"
                        alt="Spotify"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl  hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://music.apple.com/us/artist/temitope-serentainer/1655629171",
                        )
                      }
                    >
                      <img
                        src="/src/images/apple-music.png"
                        alt="Apple Music"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://music.amazon.co.uk/artists/B0BNCRWWK5/temitope-serentainer",
                        )
                      }
                    >
                      <img
                        src="/src/images/amazon-music.png"
                        alt="Amazon Music"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://music.youtube.com/channel/UCjTslmf66LGZxe7H6kYNHbA",
                        )
                      }
                    >
                      <img
                        src="/src/images/youtube.png"
                        alt="YouTube Music"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://audiomack.com/temitopeserentainer-",
                        )
                      }
                    >
                      <img
                        src="/src/images/audiomack.png"
                        alt="Audiomack"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://www.instagram.com/temitopeserentainer",
                        )
                      }
                    >
                      <img
                        src="/src/images/instagram.png"
                        alt="instagram"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://www.facebook.com/share/1AnVkwVoJt/",
                        )
                      }
                    >
                      <img
                        src="/src/images/facebook.png"
                        alt="facebook"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal("https://x.com/TemiSerentainer")
                      }
                    >
                      <img
                        src="/src/images/x-Twitter.png"
                        alt="x-Twitter"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 md:h-16 md:w-16 rounded-1xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all shadow-lg border flex-shrink-0 group"
                      onClick={() =>
                        openExternal(
                          "https://www.tiktok.com/@temitopeserentainer?_r=1&_t=ZS-94XmvwBpNAr",
                        )
                      }
                    >
                      <img
                        src="/src/images/tiktok.png"
                        alt="tiktok"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="bookings"
                className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50"
              >
                <div className="space-y-4">
                  <p className="text-sm md:text-lg leading-relaxed text-gray-800">
                    Experience Temitope Serentainer's live performances weekly
                    at:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                    <li className="font-semibold text-sm md:text-lg text-gray-900">
                      Eko Hotels & Suites, VI, Lagos
                    </li>
                    <li className="font-semibold text-sm md:text-lg text-gray-900">
                      Marriott Hotel, Ikeja – Lagos
                    </li>
                    <li className="font-semibold text-sm md:text-lg text-gray-900">
                      Golden Tulip Hotel, Ibadan
                    </li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-800">
                    Perfect for corporate events, private celebrations, and
                    special occasions locally and internationally.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">
                    Bookings
                  </h3>
                  <p className="text-xl font-semibold mb-2 text-blue-800">
                    Manager: Mr. Tobi Michael
                  </p>
                  <p className="text-3xl font-black text-blue-900 mb-2 leading-tight tracking-wide">
                    +234 806 722 6756
                  </p>
                </div>

                <p className="text-center text-xl font-bold text-green-700 italic pt-2 pb-2 bg-green-50 rounded-2xl p-6 shadow-md">
                  Thank you for your audience.
                </p>
              </TabsContent>
            </div>
          </Tabs>

          {/* Social Icons */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
