import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Power Grid Load Forecasting - Omar Abdesslem",
  description: "Weekly ARIMA forecasts of Swiss energy consumption based on Omar Abdesslem's 2025 Bachelor thesis.",
  metadataBase: new URL("https://omar-abdesslem.ch"),
  openGraph: {
    title: "Swiss Power Grid Load Forecasting",
    description: "Interactive forecast visualizations from Omar Abdesslem's 2025 Bachelor thesis.",
    url: "https://energy-forecast.netlify.app/",
    siteName: "Thesis Forecast App",
    type: "website",
  },
  other: {
    "google-site-verification": "Kyi2izwqEC78hVNyP6sVt31wahToL7IJ92tfQWKADEE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "author": {
                "@type": "Person",
                "name": "Omar Abdesslem",
              },
              "headline": "Power Grid Load Forecasting using Machine Learning Approaches",
              "description": "This site visualizes weekly forecasts of Swiss energy consumption based on ARIMA modeling.",
              "url": "https://omar-abdesslem.ch",
              "datePublished": "2025-06-01",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
