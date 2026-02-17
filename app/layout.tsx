import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Optimize fonts using next/font
import { ThemeProvider } from "../components/theme-provider";
import "../css/tailwind.css";
// import "../css/global.scss"; // Redundant after redesign

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://onlyface.app'),
  title: {
    default: "Onlyface - Where Beauty Meets Approval!",
    template: "%s | Onlyface",
  },
  description: "Onlyface is a revolutionary app that redefines social networking through the power of beauty and community approval. Join a curated community of attractive individuals.",
  applicationName: 'Onlyface',
  authors: [{ name: 'Onlyface Team', url: 'https://onlyface.app' }],
  generator: 'Next.js',
  keywords: ['dating app', 'social network', 'beauty', 'community', 'approval', 'attractive', 'exclusive'],
  referrer: 'origin-when-cross-origin',
  creator: 'Onlyface Inc.',
  publisher: 'Onlyface Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Onlyface - Where Beauty Meets Approval!",
    description: "Join Onlyface, the exclusive social network where beauty opens doors. Connect with genuine, verified individuals in a curated community.",
    url: 'https://onlyface.app',
    siteName: 'Onlyface',
    images: [
      {
        url: '/img/hero.png', // Ensure this image exists in public/
        width: 1200,
        height: 630,
        alt: 'Onlyface App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Onlyface - Where Beauty Meets Approval!",
    description: "Redefining social networking through beauty and community approval.",
    creator: '@onlyfaceapp', // Replace with actual handle if known
    images: ['/img/hero.png'], // Ensure this image exists in public/
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Onlyface',
  applicationCategory: 'SocialNetworkingApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1200',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
