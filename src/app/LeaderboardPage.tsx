'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Leaderboard from '@/components/Leaderboard';
import { Card, CardContent } from '@/components/ui/card';

const backgroundImages = [
  '/images/gojo.png',    // Sunday
  '/images/deku.jpeg',   // Monday
  '/images/broly1.png',  // Tuesday
  '/images/yuji.jpeg',   // Wednesday
  '/images/allmight.png',// Thursday
  '/images/kenny.png',   // Friday
  '/images/lee.jpg',     // Saturday
];

export default function LeaderboardPage() {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    const index = new Date().getDay();
    setBgImage(backgroundImages[index]);
  }, []);

  // Fallback until useEffect runs
  if (!bgImage) return null;

  return (
    <div
    className="min-h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url('${bgImage}')` }}
  >
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <Header />
        
        <Card className="mt-8 bg-black/30 border-blue-900/30 shadow-xl">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Global Leaderboard</h2>
            <Leaderboard />
          </CardContent>
        </Card>

        <footer className="mt-auto pt-12 text-center text-sm text-blue-200/70">
          <p>Challenge yourself every day. Join the pushup revolution!</p>
        </footer>
      </div>
    </div>
  );
};
