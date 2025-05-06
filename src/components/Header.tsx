// src/Header.tsx
"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import LoginButton from "./LoginButton";
import { Button } from "@/components/ui/button";
import ClockInButton from './ClockInButton';
import { useAuth } from "@/context/AuthContext";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { user, loading, signOut } = useAuth();

  return (
    <header className={cn("py-6 md:py-10", className)}>
      {/* flex-col on mobile, row on md; reversed so buttons sit on top when stacked */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        
        {/* — your text block — */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
            Project <span className="text-blue-400">Saitama</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Challenge yourself, climb the leaderboard, and build your strength streak!
          </p>
        </div>

        {/* — your buttons — */}
        <div className="flex items-center space-x-4">
          {loading ? (
            <span className="text-white">Loading…</span>
          ) : user ? (
            <>
              <span className="text-white">
                Welcome, {user.displayName}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="bg-blue-600/70 text-white border-blue-500/50 hover:bg-blue-700 hover:text-white"
              >
                Sign Out
              </Button>
              <ClockInButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
