# LearnSphere AI — System Architecture & Design Document

> **Platform Tagline**: *Learn Anything. Build Everything. Grow Everywhere.*  
> **Core Vision**: A unified, modern, accessible, and secure AI-powered educational ecosystem serving learners from early childhood (ages 5–12) to working professionals, parents, teachers, and system administrators.

---

## 1. High-Level Architecture Overview

LearnSphere AI adopts a modern decoupled full-stack architecture with strict separation of concerns, zero-trust backend authorization, and Row-Level Security (RLS) at the database layer.

```
                           ┌──────────────────────────────────────────────┐
                           │               CLIENT LAYER                   │
                           │   React 18 + TypeScript + Vite + Tailwind    │
                           │  Lucide Icons + Responsive Design + Themes   │
                           └──────────────────────┬───────────────────────┘
                                                  │ HTTPS / JSON / JWT
                                                  ▼
                           ┌──────────────────────────────────────────────┐
                           │               API / BACKEND                  │
                           │           FastAPI (Python 3.11)              │
                           │  - JWT Verification & Role-Based Auth Guard  │
                           │  - Input Validation (Pydantic v2)            │
                           │  - Rate Limiting & Audit Logging             │
                           │  - AI Service (Google Gemini Backend-only)   │
                           └───────────────┬──────────────┬───────────────┘
                                           │              │
                    PostgreSQL Connection  │              │ Secure API Key (Server-side)
                                           ▼              ▼
           ┌──────────────────────────────────────┐  ┌───────────────────────┐
           │        DATABASE & AUTH LAYER         │  │   AI SERVICE LAYER    │
           │         Supabase PostgreSQL          │  │   Google Gemini API   │
           │  - 26 Normalized Relational Tables   │  │   - Safe Learning     │
           │  - Strict Row Level Security (RLS)   │  │   - Code Debugger     │
           │  - GoTrue Authentication             │  │   - Concept Explainer │
           │  - Storage Buckets (Docs, Media)     │  │   - Age Safeguards    │
           └──────────────────────────────────────┘  └───────────────────────┘
```

---

## 2. Technology Stack Selection & Rationale

| Component | Technology | Rationale |
|---|---|---|
| **Frontend Framework** | React 18 + TypeScript | Type-safe component architecture, high performance, robust ecosystem. |
| **Build Tool** | Vite | Lightning-fast HMR and optimized production bundles. |
| **Styling** | Tailwind CSS + Custom Design System | Utility-first, responsive, accessible contrast, seamless dark/light modes. |
| **Icons** | Lucide React | Consistent, lightweight, accessible iconography. |
| **Routing** | React Router v6 | Declarative client-side routing with role-based route protection. |
| **Backend API** | FastAPI (Python 3.11) | High performance asynchronous API framework with automatic OpenAPI docs. |
| **Data Validation** | Pydantic v2 | Robust runtime schema enforcement and serialization. |
| **Database & Auth** | Supabase (PostgreSQL 15+) | Enterprise-grade ACID compliance, native Row-Level Security (RLS), and JWT auth. |
| **AI Engine** | Google Gemini API (Backend Proxy) | High reasoning capability, backend credential isolation, age-appropriate content filters. |

---

## 3. Role-Based Access Control (RBAC) Matrix

Security enforcement is multi-layered: frontend route guards provide UX routing, while backend FastAPI dependencies and PostgreSQL RLS policies enforce immutable access boundaries.

| Role | Public Pages | Student Dashboard & Courses | Teacher Classes & Quizzes | Parent Child Oversight | Admin Management & Audits |
|---|:---:|:---:|:---:|:---:|:---:|
| **Visitor** | Read-Only | Denied | Denied | Denied | Denied |
| **Student** | Full Access | Personal Only | Denied | Denied | Denied |
| **Teacher** | Full Access | Authorized Only | Assigned Classes Only | Denied | Denied |
| **Parent/Guardian** | Full Access | Denied | Denied | Linked Child Only | Denied |
| **Admin** | Full Access | Full Access | Full Access | Full Access | Full Access |

### Child Safety & Privacy Safeguards
1. **COPPA / Indian DPDP Compliance**: Students under 13 require parental linking and consent records.
2. **Private Identity Protection**: Minors' profiles, contact info, and activity are private by default; no public discovery.
3. **AI Safeguards**: AI prompts are filtered on the backend with age-appropriate safety guidelines to ensure safe, nurturing responses.

---

## 4. Phased Development Roadmap

- **Phase 1: Foundation & Public Platform**
  - Scaffold project structure (`frontend`, `backend`, `database`, `docs`).
  - Configure Vite, React, TypeScript, Tailwind CSS, and FastAPI backend.
  - Implement full responsive navigation, light/dark mode theme system, and professional visual branding.
  - Implement all 14 public pages with rich, accessible content.
- **Phase 2: Supabase Auth & Secure Identity**
  - Configure Supabase client, auth state management, registration, login, logout, password recovery.
  - Enforce age-category onboarding and parental consent triggers.
- **Phase 3: Database Schema & RLS Security**
  - Implement 26 normalized database tables with foreign keys and constraints.
  - Configure RLS policies preventing privilege escalation and cross-student data leakage.
  - FastAPI auth dependencies and role verification middleware.
- **Phase 4: Student Dashboard & Learning Management**
  - Personal onboarding & interest selector.
  - Interactive LMS: course catalog, module browser, lesson viewer, completion tracking.
  - Practical science and programming project libraries with viva & code examples.
- **Phase 5: Assessments, Teacher & Parent Dashboards**
  - Timed quiz engine with instant score calculation and explanations.
  - Teacher dashboard: class management, quiz creator, student progress metrics.
  - Parent dashboard: linked children overview, activity tracker, consent management.
- **Phase 6: Admin Portal, AI Assistant & Career Hub**
  - Admin dashboard: user roles, content moderation, category management, audit logs.
  - AI learning assistant (backend Gemini integration with fallback & safety boundaries).
  - Career development: resume builder, interview practice, roadmaps.
- **Phase 7: End-to-End Verification & Deployment Guide**
  - Security testing, authorization boundary tests, responsive validation, deployment documentation.
