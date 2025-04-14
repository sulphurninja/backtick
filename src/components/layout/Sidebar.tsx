import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  Code2,
  PenTool,
  Megaphone,
  Library,
  Settings,
  Plus
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full border-r border-sidebar-border">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-md bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold">`</span>
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Backtick</h1>
        </div>

        <Button variant="outline" className="w-full justify-start gap-2 mb-6 bg-sidebar-accent/50 border-sidebar-border">
          <Plus className="h-4 w-4" />
          New Project
        </Button>

        <nav className="space-y-1">
          <NavItem icon={<Home className="h-4 w-4" />} label="Dashboard" active />
          <NavItem icon={<Users className="h-4 w-4" />} label="AI Team" />
          <NavItem icon={<Code2 className="h-4 w-4" />} label="Developer" />
          <NavItem icon={<PenTool className="h-4 w-4" />} label="Designer" />
          <NavItem icon={<Megaphone className="h-4 w-4" />} label="Marketer" />
          <NavItem icon={<Library className="h-4 w-4" />} label="Components" />
        </nav>

        <Separator className="my-4 bg-sidebar-border" />

        <div className="space-y-1">
          <NavItem icon={<Settings className="h-4 w-4" />} label="Settings" />
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="rounded-md p-3 bg-sidebar-accent/30">
          <p className="text-xs font-medium text-sidebar-foreground/80 mb-1">Talk to a team even if you don&apos;t have one</p>
          <p className="text-xs text-sidebar-foreground/60">v0.1 Alpha</p>
        </div>
      </div>
    </aside>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-2 text-sm font-medium ${
        active
          ? "bg-sidebar-accent text-sidebar-foreground"
          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
      }`}
    >
      {icon}
      {label}
    </Button>
  );
}
