import React from 'react';
import { Download, Mail, Linkedin, Dribbble, Instagram, ExternalLink } from 'lucide-react';

export default function ResumeContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const message = encodeURIComponent(data.get('message') || '');
    const body = `Hi Jishnu,%0D%0A%0D%0A${message}%0D%0A%0D%0A— ${name} (${email})`;
    window.location.href = `mailto:jishnudas@example.com?subject=Portfolio%20Inquiry&body=${body}`;
  };

  return (
    <section id="resume" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Resume & Skills</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-prose">
              A blend of branding and product design skills. I translate business and user needs into thoughtful, usable interfaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['UI Design','UX Research','Wireframing','Branding','Visual Design','Prototyping'].map((s) => (
                <span key={s} className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 bg-white dark:bg-neutral-900">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a href="/Jishnu-Das-Resume.pdf" download className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div id="contact">
            <h3 className="text-xl font-semibold tracking-tight">Contact</h3>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">Let’s collaborate. I’m open to internships, junior roles, and freelance projects.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-900/10 dark:ring-white/10" />
              <input type="email" name="email" required placeholder="Your email" className="w-full rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-900/10 dark:ring-white/10" />
              <textarea name="message" rows="4" placeholder="Your message" className="w-full rounded-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 ring-neutral-900/10 dark:ring-white/10" />
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium hover:opacity-90 transition">
                  <Mail size={16} /> Send Message
                </button>
                <a href="mailto:jishnudas@example.com" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Or email directly</a>
              </div>
            </form>

            <div className="mt-8">
              <div className="text-sm text-neutral-500">Find me on</div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" href="https://dribbble.com/" target="_blank" rel="noreferrer">
                  <Dribbble size={16} /> Dribbble
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" href="https://instagram.com/" target="_blank" rel="noreferrer">
                  <Instagram size={16} /> Instagram
                </a>
                <a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" href="https://www.behance.net/" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Behance
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-6 text-sm text-neutral-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jishnu Das. All rights reserved.</p>
          <a href="#home" className="hover:underline">Back to top</a>
        </footer>
      </div>
    </section>
  );
}
