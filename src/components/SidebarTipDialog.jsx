import React from "react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function SidebarTipDialog({ open, onOpenChange }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="p-0 h-[50vh] w-[100vw] max-w-md rounded-t-3xl border-0 bg-white">
        <div className="mx-auto mt-4 w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-200" />
        
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Leave a Tip</h2>
            <p className="text-gray-600">Support the artist by leaving a tip</p>
          </div>
          
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
          <div className="text-center pt-2 pb-6">
            <p className="text-sm text-gray-500">Account Name</p>
            <p className="text-lg font-semibold text-gray-900">Temitope Serentainer</p>
          </div>
        </div>

        <div className="p-6 pt-0">
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            Close
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

