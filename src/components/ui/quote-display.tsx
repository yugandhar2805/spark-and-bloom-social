
import { useState, useEffect } from "react";
import { loveQuotes } from "@/data/mockProfiles";

interface QuoteDisplayProps {
  variant?: "splash" | "card" | "subtle";
  className?: string;
  fixed?: boolean;
}

export function QuoteDisplay({ 
  variant = "subtle", 
  className = "", 
  fixed = false 
}: QuoteDisplayProps) {
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    if (fixed && loveQuotes.length > 0) {
      // Use a fixed quote based on the current day
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const quoteIndex = dayOfYear % loveQuotes.length;
      setQuote(loveQuotes[quoteIndex]);
    } else {
      // Use a random quote
      const randomIndex = Math.floor(Math.random() * loveQuotes.length);
      setQuote(loveQuotes[randomIndex]);
    }
  }, [fixed]);

  if (!quote) return null;

  switch (variant) {
    case "splash":
      return (
        <div className={`text-center mb-8 animate-fade-in ${className}`}>
          <blockquote className="text-xl md:text-2xl font-light italic text-white/90">
            "{quote}"
          </blockquote>
        </div>
      );
    case "card":
      return (
        <div className={`bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 p-6 rounded-lg shadow-md mb-6 ${className}`}>
          <blockquote className="text-lg italic border-l-4 border-pink-400 pl-4 py-1">
            "{quote}"
          </blockquote>
        </div>
      );
    case "subtle":
    default:
      return (
        <div className={`text-center my-4 text-muted-foreground ${className}`}>
          <p className="text-sm italic">"{quote}"</p>
        </div>
      );
  }
}
