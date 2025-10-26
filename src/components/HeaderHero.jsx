import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Menu, X, Sun, Moon } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function HeaderHero() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.getItem('theme');
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    setDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="relative">
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-blue-500 to-sky-400 dark:from-sky-500 dark:to-indigo-400" />
              <span className="font-semibold tracking-tight">Jishnu Das</span>
              <span className="ml-2 text-xs rounded-full bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200 px-2 py-0.5">Work in Progress</span>
            </a>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button aria-label="Toggle theme" onClick={toggleTheme} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setOpen((o) => !o)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3">
              {navItems.map((n) => (
                <a onClick={() => setOpen(false)} key={n.href} href={n.href} className="py-2 text-neutral-800 dark:text-neutral-100">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <section id="home" className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white dark:from-neutral-950/30 dark:via-neutral-950/40 dark:to-neutral-950" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Hi, I’m Jishnu Das — a Graphic Designer exploring UI/UX Design.
              </h1>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-xl">
                Crafting human-centered visuals with design thinking, clarity, and simple elegance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">View My Work <ArrowRight size={16} /></a>
                <a href="/Jishnu-Das-Resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
