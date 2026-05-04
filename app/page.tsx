"use client";

import { ShowcaseCard } from "@/components/ShowcaseCard";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Next.js Template
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          A modern, production-ready template with TypeScript, Tailwind CSS,
          dark mode, and responsive sidebar navigation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/X-Marosi/nextjs-template"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 text-lg inline-block text-center"
          >
            Get Started
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3 text-lg"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShowcaseCard
            title="Navigation"
            description="Next.js file-based routing, easily toggle sidebar and navbar visibility, mobile-friendly design with fully collapsible sidebar"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Fast & Modern"
            description="Built with Next.js 16 and React 19 for optimal performance and developer experience"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Tailwind CSS v4"
            description="Utility-first CSS framework with CSS variables for easy theme customization"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Theme Toggle"
            description="Elegant dark/light theme toggle with CSS variables - edit colors in one place"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="Responsive Layout"
            description="Mobile-first design with collapsible sidebar that adapts to all screen sizes, easily toggle sidebar and navbar visibility"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <ShowcaseCard
            title="TypeScript"
            description="Fully typed with TypeScript for enhanced developer experience and fewer runtime errors"
            icon={
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            }
          />
        </div>
      </section>
    </div>
  );
}
