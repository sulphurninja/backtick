import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, Bell, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import Sidebar from "./Sidebar";

export default function Topbar() {
  return (
    <header className="h-16 bg-background/80 backdrop-blur-sm border-b border-border/50 px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5 text-muted-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-sidebar border-sidebar-border">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <span className="text-sm font-medium hidden md:inline-block">
          Backtick
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <ThemeToggle />
        <Avatar className="w-8 h-8 ml-2">
          <AvatarImage src="/avatar-placeholder.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
