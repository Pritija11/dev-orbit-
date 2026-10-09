import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://devorbit.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DevOrbit — The Control Center for Everything You Ship",
    template: "%s · DevOrbit",
  },
  description:
    "DevOrbit is an early-stage developer tools startup building an internal developer platform that centralizes deployments, environments, and pipelines into one dashboard — so your team stops switching between six different tools to answer one question.",
  keywords: [
    "DevOrbit",
    "internal developer platform",
    "platform engineering",
    "deployment dashboard",
    "DevOps",
    "CI/CD orchestration",
    "developer tools",
    "developer tools startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevOrbit — The Control Center for Everything You Ship",
    description:
      "One dashboard for deployments, environments, and pipelines — instead of six different tools.",
    siteName: "DevOrbit",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOrbit — The Control Center for Everything You Ship",
    description:
      "One dashboard for deployments, environments, and pipelines — instead of six different tools.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevOrbit",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "DevOrbit is an early-stage developer tools startup building an internal developer platform that centralizes deployments, environments, and pipelines into one dashboard.",
  email: "hello@devorbit.ltd",
  telephone: "+977-981-2345678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baneshwor",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
