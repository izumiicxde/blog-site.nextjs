import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/SiteHeader";
import { Provider } from "@/components/Providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIX_APP_URL ?? siteConfig.url)
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefer-color-scheme: light)", color: "white" },
    { media: "(prefer-color-scheme: dark)", color: "black" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem] scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Provider>
          <div className="relative min-h-dvh flex flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </Provider>
      </body>
    </html>
  );
}
