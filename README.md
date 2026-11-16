# LearnSphere AI — Complete Full-Stack Educational Ecosystem

> **Tagline**: *Learn Anything. Build Everything. Grow Everywhere.*

LearnSphere AI is a unified, accessible, and secure AI-powered educational ecosystem designed to serve people across diverse age groups and learning stages—from children discovering foundational science to university scholars, job seekers, educators, and guardians.

---

## 🚀 Key Highlights & Philosophy

- **Personalization by Life Stage**: Tailored experiences for Children (5–12), School Students (13–18), College Scholars (18–24), Job Seekers, Working Professionals, Teachers, and Parents.
- **Child Safety & DPDP Compliance**: Complete privacy for minors, COPPA and Indian DPDP Act alignment, mandatory parental linking for young children, and zero social or public exposure.
- **Real Hands-On Learning**: Interactive Science & STEM lab with step-by-step apparatus lists and viva questions; multi-language Code Arena (Python, JavaScript/TypeScript, C++, SQL, React, AI).
- **Responsible AI Tutoring**: Backend-secured AI pedagogical guidance with age-appropriate safety guards, concept simplifications, and code debugging.
- **Zero-Trust Role-Based Access Control**: Strict database Row Level Security (RLS) ensuring students can never escalate roles, read other students' private data, or bypass administrative controls.

---

## 📂 Repository Structure

```
ProjectBee/
├── frontend/               # React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons
│   ├── src/
│   │   ├── components/     # Navbar, Footer, UI Cards
│   │   ├── context/        # ThemeContext (Light/Dark mode)
│   │   ├── layouts/        # RootLayout with responsive navigation
│   │   ├── pages/          # 14 Full Public Pages
│   │   ├── index.css       # Tailwind & custom visual styling
│   │   └── App.tsx         # Central application routing
│   └── package.json
│
├── backend/                # Python 3.11, FastAPI, Pydantic v2
│   ├── app/
│   │   ├── api/v1/         # Versioned endpoints (health, ping, OpenAPI)
│   │   ├── core/           # Configuration, settings & security
│   │   ├── models/         # Database models
│   │   ├── schemas/        # Request/response validation schemas
│   │   ├── services/       # Business logic & AI proxies
│   │   └── main.py         # FastAPI application entry point
│   ├── tests/              # Automated test suites
│   └── requirements.txt
│
├── database/               # Supabase migrations, RLS policies, seed SQL
│   ├── migrations/
│   └── policies/
│
├── docs/                   # Platform documentation
│   ├── ARCHITECTURE.md     # Full architectural specifications
│   └── DEVELOPMENT.md      # Phased progress & roadmap tracker
│
├── .gitignore
└── README.md
```

---

## 🛠️ Quickstart Guide

### 1. Backend Service (FastAPI)

```bash
# Navigate to backend and install dependencies
pip install -r backend/requirements.txt

# Run the FastAPI development server
python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```
Interactive API Documentation is available at:
- Swagger UI: `http://localhost:8000/api/v1/docs`
- ReDoc: `http://localhost:8000/api/v1/redoc`
- Health Endpoint: `http://localhost:8000/api/v1/health`

### 2. Frontend Application (React + Vite)

```bash
# Navigate to frontend and install dependencies
cd frontend
npm install

# Start the Vite development server
npm run dev
```
The application will launch at: `http://localhost:5173`

---

## 🧪 Running Automated Tests

```bash
# Execute backend verification suite
python -m backend.tests.test_phase1

# Verify frontend production build
cd frontend
npm run build
```

---

## 🗺️ Development Roadmap

- [x] **Phase 1**: System Architecture, Backend Foundation, Responsive Navigation, Theme System & All 14 Public Pages.
- [ ] **Phase 2**: Supabase Authentication, Session Management, Age Category Safeguards & Parental Linking.
- [ ] **Phase 3**: 26 Normalized Database Tables, Row Level Security (RLS) Policies & Backend RBAC Middleware.
- [ ] **Phase 4**: Student Dashboard, Onboarding Interest Selector & Interactive LMS / Science Lab.
- [ ] **Phase 5**: Timed Assessment & Quiz Engine, Teacher Class Management & Parent Monitoring Portals.
- [ ] **Phase 6**: Admin Management Portal, Backend-Guarded Gemini AI Assistant & Career Resume Builder.
- [ ] **Phase 7**: End-to-End Security Hardening, Responsiveness Audits & Production Deployment Docs.
