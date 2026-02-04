"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/lib/sidebar-context";

// Icon components for cleaner code
const HomeIcon = () => (
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
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const DashboardIcon = () => (
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
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
);

const UsersIcon = () => (
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
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const SettingsIcon = () => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const AnalyticsIcon = () => (
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
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const DocumentIcon = () => (
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
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const CollapseIcon = ({ isCollapsed }: { isCollapsed: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />
  </svg>
);

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const mainNavItems: NavItem[] = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { name: "Analytics", href: "/analytics", icon: <AnalyticsIcon /> },
  { name: "Users", href: "/users", icon: <UsersIcon /> },
  { name: "Documents", href: "/documents", icon: <DocumentIcon /> },
];

const bottomNavItems: NavItem[] = [
  { name: "Settings", href: "/settings", icon: <SettingsIcon /> },
];

interface SidebarItemProps {
  item: NavItem;
  isCollapsed: boolean;
  isActive: boolean;
  onClick?: () => void;
}

function SidebarItem({
  item,
  isCollapsed,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${isCollapsed ? "justify-center" : ""}
        ${
          isActive
            ? "bg-[var(--color-sidebar-item-active)] text-[var(--color-sidebar-item-active-text)] font-medium"
            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-sidebar-item-hover)] hover:text-[var(--color-text-primary)]"
        }
      `}
      title={isCollapsed ? item.name : undefined}
    >
      <span className="flex-shrink-0">{item.icon}</span>
      {!isCollapsed && <span className="truncate">{item.name}</span>}
    </Link>
  );
}

export function Sidebar() {
  const { isCollapsed, isMobileOpen, toggleCollapse, closeMobile } =
    useSidebar();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] flex flex-col
          bg-[var(--color-sidebar-bg)] border-r border-[var(--color-sidebar-border)]
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-16" : "w-64"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {mainNavItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
              isActive={pathname === item.href}
              onClick={closeMobile}
            />
          ))}
        </nav>

        {/* Bottom section */}
        <div className="px-3 py-4 border-t border-[var(--color-sidebar-border)] space-y-1">
          {bottomNavItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
              isActive={pathname === item.href}
              onClick={closeMobile}
            />
          ))}

          {/* Collapse toggle - desktop only */}
          <button
            onClick={toggleCollapse}
            className={`
              hidden lg:flex items-center gap-3 w-full px-3 py-2.5 rounded-lg
              text-[var(--color-text-secondary)] hover:bg-[var(--color-sidebar-item-hover)] 
              hover:text-[var(--color-text-primary)] transition-all duration-200
              ${isCollapsed ? "justify-center" : ""}
            `}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <CollapseIcon isCollapsed={isCollapsed} />
            {!isCollapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
