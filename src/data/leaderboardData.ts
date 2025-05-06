export type LeaderboardEntry = {
    id: string;
    username: string;
    pushups: number;
    streak: number;
    avatar?: string;
  };
  
  export const leaderboardData: LeaderboardEntry[] = [
    {
      id: "1",
      username: "PushupKing",
      pushups: 1568,
      streak: 38,
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: "2",
      username: "FitnessWarrior",
      pushups: 1432,
      streak: 22,
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: "3",
      username: "StrengthMaster",
      pushups: 1299,
      streak: 16,
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: "4",
      username: "WorkoutHero",
      pushups: 1100,
      streak: 9,
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: "5",
      username: "FitnessJunkie",
      pushups: 950,
      streak: 5,
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: "6",
      username: "PushupChamp",
      pushups: 850,
      streak: 1,
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    {
      id: "7",
      username: "MuscleBuilder",
      pushups: 820,
      streak: 15,
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    {
      id: "8",
      username: "AthleticPro",
      pushups: 780,
      streak: 12,
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      id: "9",
      username: "FitnessFanatic",
      pushups: 720,
      streak: 10,
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: "10",
      username: "TrainingBeast",
      pushups: 650,
      streak: 8,
      avatar: "https://i.pravatar.cc/150?img=10"
    }
  ];