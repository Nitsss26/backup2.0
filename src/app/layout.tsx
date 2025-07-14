
// // import type { Metadata } from 'next';
// // import { Poppins } from 'next/font/google'; // Changed back to Poppins
// // import './globals.css';
// // import { Toaster } from '@/components/ui/toaster';
// // import AppProviders from '@/components/AppProviders';
// // import { ThemeProvider } from "@/components/ThemeProvider";
// // import { AnalyticsTracker } from '@/components/AnalyticsTracker'; // Import AnalyticsTracker

// // // Configure Poppins font
// // const poppins = Poppins({ 
// //   subsets: ['latin'], 
// //   weight: ['300', '400', '500', '600', '700', '800'], // Common weights for Poppins
// //   variable: '--font-poppins' // Define CSS variable
// // });

// // export const metadata: Metadata = {
// //   title: 'EdTechCart - All-in-One Marketplace for Online Courses',
// //   description: 'Discover, compare, and enroll in the best online courses from top educators.',
// //   icons: {
// //     icon: '/favicon.ico',
// //   }
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={`${poppins.variable} font-body antialiased flex flex-col min-h-screen`}>
// //         <ThemeProvider
// //             attribute="class"
// //             defaultTheme="system"
// //             enableSystem
// //             disableTransitionOnChange
// //         >
// //           <AppProviders>
// //             {children}
// //             <AnalyticsTracker /> {/* Add AnalyticsTracker here */}
// //             <Toaster />
// //           </AppProviders>
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }

// // app/layout.tsx
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import './globals.css';
// import { Toaster } from '@/components/ui/toaster';
// import AppProviders from '@/components/AppProviders';
// import { ThemeProvider } from '@/components/ThemeProvider';
// import { AnalyticsTracker } from '@/components/AnalyticsTracker';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins',
// });

// export const metadata: Metadata = {
//   title: 'EdTechCart - All-in-One Marketplace for Online Courses',
//   description: 'Discover, compare, and enroll in the best online courses from top educators.',
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${poppins.variable} font-body antialiased flex flex-col min-h-screen`}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
//           <AppProviders>
//             {children}
//             <AnalyticsTracker />
//             <Toaster />
//           </AppProviders>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }




import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppProviders from '@/components/AppProviders';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'EdTechCart - All-in-One Marketplace for Virtual Products',
  description: 'Discover, compare, and enroll in the best online virtual products from top sellers.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-body antialiased flex flex-col min-h-screen`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PWN0S99BW"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6PWN0S99BW');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AppProviders>
            {children}
            <AnalyticsTracker />
            <Toaster />
          </AppProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
