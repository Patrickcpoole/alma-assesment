"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r relative overflow-hidden">
        {/* Curved gradient overlay */}
        <div className="absolute -top-48 -left-32 w-96 h-80 bg-[#e0f0bc]/80 rounded-full blur-3xl" />

        {/* Existing sidebar content */}
        <div className="relative p-6">
          <Link href="/" className="text-5xl text-secondary font-bold">
            almă
          </Link>
        </div>
        <nav className="relative mt-6 ml-2">
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
      className={`flex items-center px-4 py-2 text-lg text-secondary ${
        isActive ? " font-bold" : " hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
};

export default AdminLayout;
