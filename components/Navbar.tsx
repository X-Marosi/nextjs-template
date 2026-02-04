"use client";

import Link from "next/link";
import { useSidebar } from "@/lib/sidebar-context";
import { ThemeToggle } from "@/components/ThemeToggle";

// Menu icon for mobile sidebar toggle
const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Close icon for mobile
const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export function Navbar() {
  const { isMobileOpen, toggleMobile } = useSidebar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[var(--color-navbar-bg)] backdrop-blur-md border-b border-[var(--color-navbar-border)]">
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left section */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-interactive-bg)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors"
            >
              NextTemplate
            </Link>
          </div>

          {/* Center section - Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/analytics">Analytics</NavLink>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search button - optional */}
            <button
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-interactive-bg)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notifications button - optional */}
            <button
              className="hidden sm:block p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-interactive-bg)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Notifications"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* User menu placeholder */}
            <div className="hidden sm:flex items-center">
              <button
                className="flex items-center gap-2 p-1.5 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-interactive-bg)] transition-colors"
                aria-label="User menu"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center text-[var(--color-text-inverse)] text-sm font-medium">
                  U
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper component for navigation links
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-medium"
    >
      {children}
    </Link>
  );
}
