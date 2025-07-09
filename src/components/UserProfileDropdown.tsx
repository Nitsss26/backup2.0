
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { LayoutDashboard, LogIn, LogOut, UserCircle, UserPlus } from 'lucide-react';
// import { useAuth } from '@/components/AppProviders'; 
// import { Skeleton } from '@/components/ui/skeleton';

// export function UserProfileDropdown() {
//   const { user, isLoading, logout } = useAuth();

//   if (isLoading) {
//     return <Skeleton className="h-10 w-10 rounded-full" />;
//   }

//   const handleLogout = async () => {
//     await logout();
//   };

//   const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "?";
  
//   const dashboardLink = user?.role === 'admin' ? '/admin' : 
//                         user?.role === 'provider' ? '/dashboard/seller' : 
//                         '/dashboard/student';

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-10 w-10 rounded-full">
//           <Avatar className="h-7 w-7">
//             <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
//             <AvatarFallback>{userInitial}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         {user ? (
//           <>
//             <DropdownMenuLabel className="font-normal">
//               <div className="flex flex-col space-y-1">
//                 <p className="text-sm font-medium leading-none">{user.name}</p>
//                 <p className="text-xs leading-none text-muted-foreground">
//                   {user.email}
//                 </p>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem asChild>
//               <Link href={dashboardLink} className="flex items-center w-full">
//                 <span className="flex items-center w-full">
//                   <LayoutDashboard className="mr-2 h-4 w-4" />
//                   <span>Dashboard</span>
//                 </span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem asChild>
//               <Link href="/dashboard/profile" className="flex items-center w-full">
//                 <span className="flex items-center w-full">
//                   <UserCircle className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center">
//               <LogOut className="mr-2 h-4 w-4" />
//               <span>Log out</span>
//             </DropdownMenuItem>
//           </>
//         ) : (
//           <>
//             <DropdownMenuItem asChild>
//               <Link href="/auth/login" className="flex items-center w-full">
//                 <span className="flex items-center w-full">
//                   <LogIn className="mr-2 h-4 w-4" />
//                   <span>Login</span>
//                 </span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem asChild>
//               <Link href="/auth/register" className="flex items-center w-full">
//                 <span className="flex items-center w-full">
//                   <UserPlus className="mr-2 h-4 w-4" />
//                   <span>Sign Up</span>
//                 </span>
//               </Link>
//             </DropdownMenuItem>
//           </>
//         )}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, LogIn, LogOut, UserCircle, UserPlus } from 'lucide-react';
import { useAuth } from '@/components/AppProviders'; 
import { Skeleton } from '@/components/ui/skeleton';

export function UserProfileDropdown() {
  const { user, isLoading, logout } = useAuth();
  const [isDashboardDisabled, setIsDashboardDisabled] = useState(true); // Initially disabled
  const [isProfileDisabled, setIsProfileDisabled] = useState(true); // Initially disabled

  if (isLoading) {
    return <Skeleton className="h-10 w-10 rounded-full" />;
  }

  const handleLogout = async () => {
    await logout();
  };

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "?";
  
  // const dashboardLink = user?.role === 'admin' ? '/admin' : 
  //                       user?.role === 'provider' ? '/dashboard/seller' : 
  //                       '/dashboard/student';
  const dashboardLink = user?.role === 'admin' ? '/' : 
  user?.role === 'provider' ? '/' : 
  '/';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user?.avatarUrl} alt={user?.name || "User"} />
            <AvatarFallback>{userInitial}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        {user ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={dashboardLink} className="flex items-center w-full" disabled={isDashboardDisabled}>
                <span className="flex items-center w-full">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#" className="flex items-center w-full" disabled={isProfileDisabled}>
                <span className="flex items-center w-full">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/auth/login" className="flex items-center w-full">
                <span className="flex items-center w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/auth/register" className="flex items-center w-full">
                <span className="flex items-center w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Sign Up</span>
                </span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}