import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

export default function AboutJourney() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">
              I’m a graphic designer transitioning into UI/UX design, bringing years of visual storytelling to digital products. My work focuses on clarity, accessibility, and aesthetics, using design thinking to solve real problems.
            </p>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I work primarily in Figma, Photoshop, and Illustrator—combining brand consistency with intuitive interfaces.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Figma','Photoshop','Illustrator','Wireframing','Branding','Visual Design'].map((s) => (
                <span key={s} className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 bg-white dark:bg-neutral-900">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4">
              <h3 className="font-medium">Learning Journey</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Calendar size={16} className="mt-0.5 text-neutral-500" />
                  <span><strong className="font-medium">2023 → 2024:</strong> Shifted focus from brand design to product thinking, exploring UX frameworks and patterns.</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={16} className="mt-0.5 text-neutral-500" />
                  <span><strong className="font-medium">Now:</strong> Building case studies, conducting user interviews, and prototyping interactions to refine craft.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
              <h3 className="text-lg font-semibold tracking-tight">Why UI/UX?</h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Visual craft is powerful, but when united with research and usability, it becomes transformative. I’m driven to create products that feel effortless—where every pixel has purpose.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-xs text-neutral-500">Strength</div>
                  <div className="font-medium">Visual systems</div>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-xs text-neutral-500">Focus</div>
                  <div className="font-medium">Usability & clarity</div>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-xs text-neutral-500">Tools</div>
                  <div className="font-medium">Figma, PS, AI</div>
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
                  <div className="text-xs text-neutral-500">Approach</div>
                  <div className="font-medium">Iterative & collaborative</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
