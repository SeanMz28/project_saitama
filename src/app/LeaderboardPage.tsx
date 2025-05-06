import React from 'react';
import Header from '@/components/Header';
//import LeaderboardTable from '@/components/LeaderboardTable';
//import { leaderboardData } from '@/data/leaderboardData';
import Leaderboard from '@/components/Leaderboard';
import { Card, CardContent } from '@/components/ui/card';

// 1) List your seven images in the order you like (0 = Sunday, … 6 = Saturday)
const backgroundImages = [
    '/images/allmight.png',  // Sunday
    '/images/deku.jpeg',    // Monday
    '/images/broly1.png',     // Tuesday
    '/images/gojo.png',      // Wednesday
    '/images/kenny.png',     // Thursday
    '/images/lee.jpg',       // Friday
    '/images/yuji.jpeg',     // Saturday
  ];

const LeaderboardPage = () => {
    // 2) Grab today’s day‐of‐week index (0–6)
  const todayIndex = new Date().getDay();
  // 3) Pick the corresponding image
  const bgImage = backgroundImages[todayIndex];
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

export default LeaderboardPage;