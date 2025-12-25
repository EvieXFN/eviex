"use client";

import { useState } from "react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("EvieX");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // Clipboard can fail on some browsers—ignore silently
    }
  };

  return (
    <button className="copyBtn" onClick={copy} type="button">
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
