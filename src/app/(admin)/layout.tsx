"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <Link href="/" className="text-2xl font-bold">
            almă
          </Link>
        </div>
        <nav className="mt-6">
          <SidebarLink href="/leads" label="Leads" />
          <SidebarLink href="/settings" label="Settings" />
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
    </div>
  );
};

const SidebarLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 text-sm ${
        isActive
          ? "bg-gray-100 text-gray-900 font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
};

export default AdminLayout;
