import React from 'react';
import fireGif from '../assets/cooking.gif';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LeaderboardEntry } from "@/data/leaderboardData";
import RankBadge from './RankBadge';

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
}

const LeaderboardTable = ({ data }: LeaderboardTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg animate-fade-in">
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900/20 hover:bg-blue-900/30">
              <TableHead className="w-16 text-center font-semibold text-white">Rank</TableHead>
              <TableHead className="font-semibold text-white">User</TableHead>
              <TableHead className="text-right font-semibold text-white">Pushups</TableHead>
              <TableHead className="text-right font-semibold w-24 text-white">Streak</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry, index) => (
              <TableRow
                key={entry.id}
                className={`
                  ${index < 3 ? 'bg-blue-800/20' : 'bg-blue-950/20'} 
                  hover:bg-blue-800/30 transition-colors
                `}
              >
                <TableCell className="text-center">
                  <RankBadge rank={index + 1} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-blue-300/30">
                      <AvatarImage src={entry.avatar} />
                      <AvatarFallback className="bg-blue-700 text-white">
                        {entry.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    {/* Username + fire GIF if streak > 30 */}
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-white">
                        {entry.username}
                      </span>
                      {entry.streak > 15 && (
                        <img
                          src={fireGif.src}
                          alt="🔥"
                          className="w-5 h-5 animate-pulse"
                        />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold text-white">
                  {entry.pushups.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span
                      className={`
                        inline-block 
                        min-w-[4rem] 
                        px-2 py-0.5 
                        whitespace-nowrap 
                        flex-shrink-0 
                        rounded-full 
                        text-xs font-medium 
                        ${entry.streak >= 20 ? 'bg-red-500/60 text-white' :
                          entry.streak >= 15 ? 'bg-orange-500/60 text-white' :
                            entry.streak >= 10 ? 'bg-orange-400/60 text-white' :
                              entry.streak >= 5 ? 'bg-blue-500/60 text-white' :
                                'bg-blue-700/40 text-white'}
                      `}
                    >
                      {entry.streak} days
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardTable;