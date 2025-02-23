import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site"; 
import { roboto } from "@/config/fonts";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white",
          roboto.variable,
        )}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
       {children}
        </Providers>
        </div>
      </body>
    </html>
  );
}
