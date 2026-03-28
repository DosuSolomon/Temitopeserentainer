import React, { useState } from "react";
import { songApi } from "@/api/apiClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddSongDialog({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("pop");

  const queryClient = useQueryClient();

  const addSongMutation = useMutation({
    mutationFn: (data) => songApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
      setTitle("");
      setArtist("");
      setAlbum("");
      setGenre("pop");
      onClose();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addSongMutation.mutate({
      title,
      artist: artist || "Unknown Artist",
      album,
      genre,
      is_available: true,
      play_count: 0,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Song</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new song to your library.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Song Title *
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter song title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Artist</label>
            <Input
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Enter artist name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Select value={genre} onValueChange={setGenre}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Foreign">Foreign</SelectItem>
                <SelectItem value="Other Foreign">Other Foreign</SelectItem>
                <SelectItem value="Nigerian Oldies">Nigerian Oldies</SelectItem>
                <SelectItem value="Nigerian Modern">Nigerian Modern</SelectItem>
                <SelectItem value="Songs by Artist">Songs by Artist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={addSongMutation.isPending}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
            >
              {addSongMutation.isPending ? "Adding..." : "Add Song"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
