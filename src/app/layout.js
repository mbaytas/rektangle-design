import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata = {
  title: "Kiritskuke",
  description: "Starter template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
