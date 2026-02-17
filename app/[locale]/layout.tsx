import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Optimize fonts using next/font
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { MicrosoftClarity } from "../../components/microsoft-clarity.client";
import { ThemeProvider } from "../../components/theme-provider";
import "../../css/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  return {
    metadataBase: new URL("https://onlyface.app"),
    title: {
      default: `Onlyface - ${tHero("title1")} ${tHero("title2")}`,
      template: "%s | Onlyface",
    },
    description: tHero("description"),
    applicationName: "Onlyface",
    // ... rest of metadata
    authors: [{ name: "Onlyface Team", url: "https://onlyface.app" }],
    generator: "Next.js",
    keywords: [
      "dating app",
      "social network",
      "beauty",
      "community",
      "approval",
      "attractive",
      "exclusive",
    ],
    referrer: "origin-when-cross-origin",
    creator: "Onlyface Inc.",
    publisher: "Onlyface Inc.",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: `Onlyface - ${tHero("title1")} ${tHero("title2")}`,
      description: tHero("description"),
      url: "https://onlyface.app",
      siteName: "Onlyface",
      images: [
        {
          url: "/img/hero.png",
          width: 1200,
          height: 630,
          alt: "Onlyface App Preview",
        },
      ],
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Onlyface - ${tHero("title1")} ${tHero("title2")}`,
      description: tHero("description"),
      creator: "@onlyfaceapp",
      images: ["/img/hero.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "./",
    },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Onlyface",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1200",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
        <GoogleAnalytics gaId="G-QGC8BDYJRY" />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
