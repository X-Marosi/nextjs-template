"use client";

import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { useSidebar } from "@/lib/sidebar-context";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main
        className={`
          pt-16 min-h-screen transition-all duration-300
          lg:pl-64
          ${isCollapsed ? "lg:pl-16" : "lg:pl-64"}
        `}
      >
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
