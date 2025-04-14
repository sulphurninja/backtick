"use client";

import { ReactNode, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // Add scroll detection for scrollbar animation
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      document.documentElement.classList.add('scrolling');

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.documentElement.classList.remove('scrolling');
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="flex h-screen bg-background">
      <div className="md:block hidden">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <main className="container max-w-7xl mx-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
