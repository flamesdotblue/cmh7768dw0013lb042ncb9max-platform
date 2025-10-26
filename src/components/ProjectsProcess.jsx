import React from 'react';
import { ExternalLink, Search, Layout, Palette, PlayCircle, CheckCircle } from 'lucide-react';

const projects = [
  {
    title: 'Nearo App',
    description: 'A concept for a location-based utility app with clean UI and intuitive flows.',
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%23a0c3ff'/><stop offset='1' stop-color='%238bd0ff'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='48' fill='white'>Nearo App</text></svg>",
  },
  {
    title: 'Biollic Milk',
    description: 'Packaging and identity refresh translated into a responsive landing page.',
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%23c1ffd7'/><stop offset='1' stop-color='%2396f7d2'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='48' fill='%230a0a0a'>Biollic Milk</text></svg>",
  },
  {
    title: 'Chilla Branding',
    description: 'Lifestyle brand identity and UI kit with scalable components.',
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%23ffd1d1'/><stop offset='1' stop-color='%23ffb3c1'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial' font-size='48' fill='%230a0a0a'>Chilla Branding</text></svg>",
  },
];

const steps = [
  { icon: Search, label: 'Research', text: 'Understand goals, users, and constraints.' },
  { icon: Layout, label: 'Wireframe', text: 'Map flows and structure interactions.' },
  { icon: Palette, label: 'UI Design', text: 'Craft visual system and components.' },
  { icon: PlayCircle, label: 'Prototype', text: 'Bring interactions to life for feedback.' },
  { icon: CheckCircle, label: 'Test', text: 'Validate and iterate to refine.' },
];

export default function ProjectsProcess() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
          <a href="#contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Need a designer? Let’s talk</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-lg/60 shadow-sm transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5">
                <h3 className="font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.description}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline">
                    View Case Study <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section id="process" className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight">Design Process</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <div className="font-medium">{label}</div>
                </div>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
