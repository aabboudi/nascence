"use client";

import { LinkIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CopyButton({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/feed/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopyLink}
      className="flex items-center space-x-2 bg-transparent"
    >
      <LinkIcon className="w-4 h-4" />
      <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Link"}</span>
    </Button>
  );
}
