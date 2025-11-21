// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhaven Naik – AI Consultant",
  description:
    "Personal site of Bhaven Naik, Artificial Intelligence Consultant at Lemay.ai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-background">{children}</body>
    </html>
  );
}
