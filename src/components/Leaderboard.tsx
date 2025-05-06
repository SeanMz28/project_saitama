 // src/components/Leaderboard.tsx
 "use client";

 import React, { useEffect, useState } from "react";
 import {
   db,
   collection,
   query,
   orderBy,
   onSnapshot
 } from "@/firebase";
 import { LeaderboardEntry } from "@/data/leaderboardData";
 import LeaderboardTable from "./LeaderboardTable";

 const Leaderboard = () => {
   const [data, setData] = useState<LeaderboardEntry[]>([]);

   useEffect(() => {
     // 1) Build a query on 'users', ordered by pushup_count descending
     const usersRef = collection(db, "users");
     const q = query(usersRef, orderBy("pushup_count", "desc"));

     // 2) Subscribe to live updates
     const unsubscribe = onSnapshot(q, (snapshot) => {
       const entries = snapshot.docs.map((doc) => {
         const d = doc.data();
         return {
           id: doc.id,
           username: d.username as string,
           pushups: d.pushup_count as number,
           streak: d.streak as number,
           avatar: d.pfp as string,           // pfp can be jpeg, png, etc.
         };
       });
       setData(entries);
     });

     // 3) Cleanup on unmount
     return () => unsubscribe();
   }, []);

   // 4) Render your existing table with live data
   return <LeaderboardTable data={data} />;
 };

 export default Leaderboard;
