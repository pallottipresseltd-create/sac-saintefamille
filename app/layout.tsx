import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/data/site-content";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  icons: {
    icon: siteContent.branding.logos.favicon,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#fdfdfd] text-[#212529]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
