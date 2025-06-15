
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { NavItem } from './DashboardSidebarNav';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { User } from '@/lib/types';
import { Settings } from 'lucide-react'; // Import Settings icon

interface StudentDashboardHeaderNavProps {
  navItems: NavItem[];
  user: User | null;
}

export function StudentDashboardHeaderNav({ navItems, user }: StudentDashboardHeaderNavProps) {
  const pathname = usePathname();
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "?";

  // Filter items specifically for student dashboard main navigation (excluding profile if it's marked as shared)
  const studentMainLinks = navItems.filter(item => !item.isShared);


  return (
    <div className="bg-card border-b sticky top-16 z-40"> {/* Ensure it's below the main site header */}
      <div className="container px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary p-0.5">
                <AvatarImage src={user?.avatarUrl} alt={user?.name || "Student"} data-ai-hint="student avatar icon dashboard"/>
                <AvatarFallback>{userInitial}</AvatarFallback>
            </Avatar>
            <div>
                <h2 className="font-semibold text-base">{user?.name}</h2>
                <p className="text-xs text-muted-foreground">Student Dashboard</p>
            </div>
        </div>
        <nav className="flex items-center space-x-1 md:space-x-2 flex-wrap justify-center">
          {studentMainLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard/student' && pathname.startsWith(item.href));
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive ? 'default' : 'ghost'}
                size="sm"
                className={cn(
                  "text-sm px-2 py-1 md:px-3 md:py-1.5 h-auto md:h-9", 
                  isActive && "font-semibold"
                )}
              >
                <Link href={item.href}>
                  <item.icon className="mr-1 md:mr-2 h-4 w-4" />
                  <span className="inline md:inline">{item.label}</span>
                </Link>
              </Button>
            );
          })}
           {/* Explicitly add Profile Settings link here, as it's managed by the main sidebar in other contexts */}
           <Button
              asChild
              variant={pathname === '/dashboard/profile' ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                "text-sm px-2 py-1 md:px-3 md:py-1.5 h-auto md:h-9",
                pathname === '/dashboard/profile' && "font-semibold"
              )}
            >
              <Link href="/dashboard/profile">
                <Settings className="mr-1 md:mr-2 h-4 w-4" />
                <span className="inline md:inline">Profile Settings</span>
              </Link>
            </Button>
        </nav>
      </div>
    </div>
  );
}
