import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata = {
  title: "Rektangle Design",
  description: "on hiatus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen overflow-x-clip">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
