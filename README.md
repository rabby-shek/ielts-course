# IELTS Course Product Page – 10 Minute School (Frontend Engineer Assessment)

This project is a clone of the [IELTS Course by Munzereen Shahid](https://10minuteschool.com/product/ielts-course/) landing page, built as part of the **Frontend Engineer (Level 1)** assessment. It uses **Next.js (with SSR & ISR)**, **TypeScript**, **TailwindCSS**, and **API integration** to fetch real-time content.

## 🔗 Live Preview

>https://ielts-course-one.vercel.app/

---

## 🚀 Features

- ✅ Fully responsive product page
- ✅ Dynamic data fetching via public API
- ✅ Server-side rendering (SSR)
- ✅ Incremental static regeneration (ISR)
- ✅ Localization support (`lang=en` or `bn`)
- ✅ SEO integration using API metadata
- ✅ YouTube video integration
- ✅ HTML rendering with proper sanitization
- ✅ Reusable components and clean architecture
- ✅ TypeScript with strong typing

---

## 📦 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **State Management**: React state, props
- **Icons**: React Icons
- **Deployment-ready**: Docker support
- **Rendering**: SSR + ISR

---

## 🧠 Sections Implemented

- **Title** (API: `title`)
- **HTML Description** (API: `description`)
- **Course Instructors** (API: `sections[]` where `type = instructor`)
- **Course Trailer** (YouTube embed from `media[]`)
- **CTA Section** (API: `cta_text`)
- **Checklist** (API: `checklist[]`)
- **Course Features** (API: `sections[]` where `type = features`)
- **What You Will Learn** (API: `sections[]` where `type = pointers`)
- **Course Details** (API: `sections[]` where `type = about`)

---

## 🔧 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/rabby-shek/ielts-course.git
cd ielts-course-landing
npm install
npm run dev