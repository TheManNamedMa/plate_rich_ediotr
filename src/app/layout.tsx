import { cn } from '@udecode/cn';

import { fontSans } from '@/lib/fonts';
import { TooltipProvider } from '@/components/plate-ui/tooltip';

import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'siteConfig.name',
    template: `%s - siteConfig.name`,
  },
  description: 'siteConfig.description',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            '[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10',
            fontSans.variable
          )}
          suppressHydrationWarning
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider
              disableHoverableContent
              delayDuration={500}
              skipDelayDuration={0}
            >
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
