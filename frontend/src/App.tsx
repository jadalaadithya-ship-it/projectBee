import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RootLayout } from './layouts/RootLayout';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Explore } from './pages/Explore';
import { Courses } from './pages/Courses';
import { ScienceProjects } from './pages/ScienceProjects';
import { Programming } from './pages/Programming';
import { AITechnology } from './pages/AITechnology';
import { Career } from './pages/Career';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

// 404 Fallback Component
const NotFound: React.FC = () => {
  return (
    <div className="py-24 text-center px-4">
      <div className="glass-card max-w-md mx-auto p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
        <span className="text-4xl font-black text-brand-600">404</span>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2">Page Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">
          The educational resource or path you are looking for has been relocated or does not exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="explore" element={<Explore />} />
            <Route path="courses" element={<Courses />} />
            <Route path="science-projects" element={<ScienceProjects />} />
            <Route path="programming" element={<Programming />} />
            <Route path="ai-technology" element={<AITechnology />} />
            <Route path="career" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
