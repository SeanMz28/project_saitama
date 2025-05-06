import React from 'react';
import Header from '@/components/Header';
import LeaderboardTable from '@/components/LeaderboardTable';
import { leaderboardData } from '@/data/leaderboardData';
import { Card, CardContent } from '@/components/ui/card';

const LeaderboardPage = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: "url('/images/broly1.png')" }}
  >
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <Header />
        
        <Card className="mt-8 bg-black/30 border-blue-900/30 shadow-xl">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Global Leaderboard</h2>
            <LeaderboardTable data={leaderboardData} />
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