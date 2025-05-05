'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatBubbleProps {
  content?: string | React.ReactNode; // Agora é opcional
  sender?: 'user' | 'bot';
  isTyping?: boolean;
  delay?: number;
  className?: string;
  timestamp?: string;
}

export function ChatBubble({
  content,
  sender = 'bot',
  isTyping = false,
  delay = 0,
  className,
  timestamp
}: ChatBubbleProps) {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "max-w-[80%] mb-2 relative",
            sender === 'user' ? "ml-auto" : "mr-auto",
            className
          )}
        >
          <div
            className={cn(
              "rounded-2xl p-3 shadow-sm",
              sender === 'user'
                ? "bg-[#e7ffdb] text-slate-800 rounded-tr-none"
                : "bg-white text-slate-800 rounded-tl-none"
            )}
          >
            {isTyping ? (
              <div className="flex gap-1 h-5 items-center px-2">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : (
              <div>{content}</div>
            )}
            {timestamp && (
              <div className="text-xs text-gray-500 text-right mt-1">
                {timestamp}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}