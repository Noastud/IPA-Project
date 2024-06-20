import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s - My Next.js App",
  },
  description: "A Next.js app with NextUI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <a
                href="https://nextui.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-current"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </a>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
