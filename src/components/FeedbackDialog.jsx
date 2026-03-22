import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Send } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export default function FeedbackDialog({ open, onOpenChange }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setName("");
    setRating(5);
    setFeedback("");
    setSubmitting(false);
    
    // Close dialog
    onOpenChange(false);
    
    // Could send to analytics/email etc.
    console.log("Feedback submitted:", { name, rating, feedback });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Give Feedback
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Star Rating */}
          <div className="space-y-2">
            <Label className="text-lg font-semibold">How was your experience?</Label>
            <ToggleGroup type="single" value={rating.toString()} onValueChange={(val) => setRating(parseInt(val))} className="justify-center flex-wrap gap-1">
              {[1,2,3,4,5].map((star) => (
                <ToggleGroupItem
                  key={star}
                  value={star.toString()}
                  className={cn(
                    "h-14 w-14 rounded-2xl p-0 flex flex-col items-center gap-1",
                    "data-[state=on]:bg-gradient-to-br data-[state=on]:from-yellow-400 data-[state=on]:to-yellow-500 data-[state=on]:text-white shadow-lg hover:scale-105 transition-all"
                  )}
                  aria-label={`${star} star rating`}
                >
                  <Star className={cn("h-6 w-6", rating >= star ? "fill-current" : "stroke-current")} />
                  <span className="text-xs font-bold">{star}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Your Name (optional)</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Anonymous"
              className="h-12"
            />
          </div>

          {/* Tell us more */}
          <div className="space-y-2">
            <Label htmlFor="feedback">Tell us more</Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What did you love? What can we improve? Your feedback helps us grow!"
              rows={4}
              className="resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={submitting || !feedback.trim()}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {submitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </>
            )}
          </Button>
        </form>

        <div className="text-xs text-center text-gray-500 mt-4 pt-4 border-t">
          Your feedback is anonymous and helps improve the experience.
        </div>
      </DialogContent>
    </Dialog>
  );
}

