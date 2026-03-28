import React, { useState } from "react";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Music, Heart, Copy } from "lucide-react";

export default function Welcome() {
  const [showTipDialog, setShowTipDialog] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/images/Artist.jpeg')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative min-h-[80svh] md:min-h-screen flex flex-col justify-center items-center px-4 py-8">
        {/* Main Text Content */}
        <div className="text-center text-white mb-16">
          <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
            You're currently listening to <span className="font-bold">Temitope Serentainer</span> ....
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Nigeria's First Female Solo Live Musician
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            One Girl • One Voice • One Guitar
          </p>
        </div>

        {/* Buttons at bottom */}
        <div className="flex justify-center">
          <Button
            onClick={() =>
              (window.location.href = createPageUrl("RequestSong"))
            }
            className="flex-1 md:flex-none md:px-8 bg-purple-600 hover:bg-purple-700 text-white text-lg py-6"
          >
            <Music className="w-5 h-5 mr-2" />
            Request Song
          </Button>
        </div>
      </div>

      {/* Tip Dialog */}
      <Dialog open={showTipDialog} onOpenChange={setShowTipDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              Leave a Tip
            </DialogTitle>
            <DialogDescription className="text-center">
              Support the artist by leaving a tip
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Moniepoint */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Moniepoint</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-gray-900">6420147645</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("6420147645")}
                  className="text-purple-600 hover:text-purple-700"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* GTBank */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">GTBank</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-gray-900">0878839156</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard("0878839156")}
                  className="text-purple-600 hover:text-purple-700"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Account Name */}
            <div className="text-center pt-2">
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="text-lg font-semibold text-gray-900">
                Temitope Serentainer
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              onClick={() => setShowTipDialog(false)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

