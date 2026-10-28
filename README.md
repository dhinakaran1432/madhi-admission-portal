# 🎓 Madhi School Admission Portal

> A production-ready, multi-user online admission system for **Madhi School** — built with a single HTML frontend, Vercel serverless functions, and Neon PostgreSQL. Fully installable as a mobile PWA.

![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-339933)
![Prisma](https://img.shields.io/badge/prisma-5.22.0-2D3748)

---

## ✨ Features

- 🏠 Beautiful landing page with school info and feature highlights
- 📝 **New Registration** — parents can create accounts
- 🔍 **Check Status** — track any application by reference number

- 📊 Live stats — applications, points, badges, notifications
- 🎯 Multi-step application form with progress bar
- 💳 UPI QR payment flow with "I Have Paid" verification
- ⏳ Real-time payment review status
- 🛍️ School store — order uniforms, books, kits
- 🏅 12 unlockable achievement badges
- 🔥 Daily login streak + points system
- 🔔 In-app notifications with unread badge
- 👤 Profile with avatar upload

- 📈 Live stats grid — members, revenue, expenses, profit
- 📊 6-month revenue bar chart (SVG, no libraries)
- 📋 Applications table with search + approve/reject
- 👥 Members directory with points + streaks
- 💰 Finance module — expense tracker with categories
- 📦 Order management — mark Ready / Delivered
- 📢 Broadcast announcements to all parents
- 🏆 Leaderboard — top 10 parents by points
- 💾 Export full backup as JSON
- 🟢 Live pulsing indicator with auto-refresh (8s poll)

- 🔐 SHA-256 salted password hashing with backward compatibility
- 🔄 Bulk JSON sync — one `/api/sync` endpoint (GET + PUT)
- 📱 PWA — installable, offline-capable with service worker
- ⚡ Zero frameworks — pure vanilla HTML/CSS/JS
- 🎨 Glassmorphism UI, Poppins font, custom animations
- 📲 Responsive — 320px phones to 4K desktops

---

## 🛠 Tech Stack

| Layer | Technology |
| **Frontend** | Single-file HTML + vanilla CSS + vanilla JS |
| **Backend** | Vercel serverless functions (Node.js, ES modules) |
| **Database** | Neon PostgreSQL (free tier) |
| **ORM** | Prisma v5.22.0 (pinned) |
| **Auth** | SHA-256 + salt (client) + localStorage session |
| **Cloud Sync** | `/api/sync` — bulk JSON GET + PUT |
| **PWA** | Web manifest + service worker |
| **Hosting** | Vercel (free tier) |
