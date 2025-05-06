
import React from 'react';
import { Medal, Award } from "lucide-react";

interface RankBadgeProps {
  rank: number;
}

const RankBadge = ({ rank }: RankBadgeProps) => {
  if (rank === 1) {
    return (
      <div className="flex items-center justify-center">
        <Medal className="h-6 w-6 text-yellow-400 animate-pulse-slow" />
        <span className="ml-2 font-bold">{rank}</span>
      </div>
    );
  }
  
  if (rank === 2) {
    return (
      <div className="flex items-center justify-center">
        <Medal className="h-6 w-6 text-gray-300" />
        <span className="ml-2 font-bold">{rank}</span>
      </div>
    );
  }
  
  if (rank === 3) {
    return (
      <div className="flex items-center justify-center">
        <Medal className="h-6 w-6 text-amber-700" />
        <span className="ml-2 font-bold">{rank}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {rank <= 10 && <Award className="h-4 w-4 text-blue-400 mr-1" />}
      <span className="font-medium">{rank}</span>
    </div>
  );
};

export default RankBadge;
