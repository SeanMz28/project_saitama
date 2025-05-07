# Project Saitama

> Track your daily push-up counts, maintain streaks, and compete on a global leaderboard.

<!-- ![Project Saitama Demo](https://project-saitama-five.vercel.app/og-image.png) -->

## 🚀 Live Demo

https://project-saitama-five.vercel.app/

## 📦 Features

- **Daily Push-Up Tracking** – Log how many push-ups you complete each day.
- **Streak Counter** – Keep motivation up by maintaining an unbroken streak.
- **Global Leaderboard** – See how you stack up against other users in total push-ups.
- **User Authentication** – Secure sign-in/out powered by Firebase Auth.
- **Data Persistence** – All stats stored in Firebase Firestore.
- **Responsive UI** – Built with Tailwind CSS for mobile & desktop.
- **Blazing Fast** – Powered by Bun & Next.js with TypeScript.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)  
- **Language**: TypeScript  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Runtime**: [Bun](https://bun.sh/)  
- **Backend & Auth**: [Firebase](https://firebase.google.com/) (Auth & Firestore)  
- **Hosting**: [Vercel](https://vercel.com/)  

## 💾 Getting Started

### Prerequisites

- [Bun v1+](https://bun.sh/) installed  

### Clone & Install

```bash
# 1. Clone this repo
git clone https://github.com/SeanMz28/project_saitama.git

# 2. Move into the project directory
cd project_saitama

# 3. Install dependencies with Bun
bun install
```

### Run Locally

```bash
# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## 🚢 Deployment

This app is deployed on Vercel. If you connect your GitHub repo to Vercel, it will:

1. Automatically install dependencies (`bun install`).
2. Run `bun run build`.
3. Deploy to your custom domain or `vercel.app` URL.

## 🤝 Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m "feat: add YourFeature"`)  
4. Push to your branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

Please follow the existing code style and open issues for any major changes.

---
Made with ❤️ by SeanMz28