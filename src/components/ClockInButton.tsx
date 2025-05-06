// src/ClockInButton.tsx
"use client";

import React, { useState, useEffect } from "react";
import { format, differenceInCalendarDays } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
//import { cn } from "@/lib/utils";

import { useAuth } from "@/context/AuthContext";
import {
    db,
    doc,
    onSnapshot,
    runTransaction,
    serverTimestamp,
    increment,
  } from "@/firebase";

const ClockInButton = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [pushups, setPushups] = useState(100);
  const [canClockIn, setCanClockIn] = useState<boolean | null>(null);
  const today = new Date();

  // 1) On mount, watch last_clockin and decide if they've already clocked in
  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const unsubscribe = onSnapshot(userRef, (snap) => {
      const data = snap.data();
      if (!data?.last_clockin) {
        setCanClockIn(true);
        return;
      }
      const last = data.last_clockin.toDate();
      const daysDiff = differenceInCalendarDays(today, last);
      // same-day → cannot; otherwise can
      setCanClockIn(daysDiff !== 0);
    });

    return () => unsubscribe();
  }, [user, today]);

  // 2) Handle the Confirm click
  const handleClockIn = async () => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    try {
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(userRef);
        if (!snap.exists()) {
          throw new Error("User document not found");
        }

        const data = snap.data();
        const lastTs = data.last_clockin?.toDate?.();
        const oldStreak = data.streak ?? 0;
        const oldMax = data.max_streak ?? 0;
        const now = new Date();

        const daysDiff = lastTs
      ? differenceInCalendarDays(now, lastTs)
      : Infinity;

    if (daysDiff === 0) throw new Error("ALREADY_CLOCKED_IN");

    // only count as a streak-day if they did ≥100 today
    const didQualify = pushups >= 100;
    let newStreak: number;
    if (!didQualify) {
      newStreak = 1;
    } else {
      newStreak = daysDiff === 1 ? oldStreak + 1 : 1;
    }

        tx.update(userRef, {
          pushup_count: increment(pushups),
          streak: newStreak,
          max_streak: Math.max(oldMax, newStreak),
          last_clockin: serverTimestamp(),
        });
      });

      toast({
        title: "Success!",
        description: `Logged ${pushups} pushups for ${format(
          today,
          "MMMM d, yyyy"
        )}`,
      });
      setOpen(false);
    } catch (err: any) {
      if (err.message === "ALREADY_CLOCKED_IN") {
        toast({
          title: "Oops!",
          description: "You’ve already clocked in today.",
          variant: "destructive",
        });
        setOpen(false);
      } else {
        console.error(err);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  // While auth or Firestore loading → don’t show anything (or a spinner)
  if (authLoading || canClockIn === null) {
    return <Button disabled>Loading…</Button>;
  }

  // 3) If they can’t clock in → red, disabled button
  if (!canClockIn) {
    return (
      <Button
        disabled
        variant="secondary"
        className="flex items-center bg-red-600 text-white cursor-not-allowed"
      >
        <Clock className="mr-2 h-4 w-4" />
        Clocked In Today
      </Button>
    );
  }

  // 4) Otherwise, regular clock-in flow
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="secondary"
        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Clock className="mr-2 h-4 w-4" />
        Clock in
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              Log Your Pushups
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Record your pushups for today.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-300">Date</label>
              <div className="flex items-center h-10 px-3 rounded-md border border-gray-700 bg-gray-800 text-white">
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                <span>{format(today, "MMMM d, yyyy")}</span>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-gray-300">
                Number of Pushups
              </label>
              <Input
                type="number"
                value={pushups}
                onChange={(e) => setPushups(parseInt(e.target.value) || 0)}
                min={1}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handleClockIn}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClockInButton;
