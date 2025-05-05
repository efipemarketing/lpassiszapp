'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface PulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export function PulseButton({
  children,
  className,
  pulse = true,
  ...props
}: PulseButtonProps) {
  return (
    <div className="relative">
      {pulse && (
        <span className="absolute inset-0 rounded-md animate-pulse-slow bg-orange-400/30"></span>
      )}
      <Button
        className={cn(
          "relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}