import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "../global.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Hi! I'm Marco",
  description: "Marco Kaul's personal website",
  manifest: "/static/manifest.json",
  icons: {
    icon: [
      { url: "/static/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/static/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/static/icons/apple-touch-icon.png",
    shortcut: "/static/icons/favicon.ico",
  },
  openGraph: { title: "Hi! I'm Marco", description: "Marco Kaul's personal website", type: "website" },
};

export const viewport: Viewport = { themeColor: "#3080e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={raleway.variable}><body>{children}</body></html>;
}
