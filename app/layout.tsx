import type { Metadata } from "next";
import { I18nProvider } from "../shared/providers/I18nProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Browse, search, filter, sort, and compare products from our catalog.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
