import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import Bridge from "@/components/landing/Bridge";
import Timing from "@/components/landing/Timing";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_URL || "https://lumi.design";

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lumi Interior Design Advisory",
  description:
    "Private interior design advisory sessions with architect Luminita Campian. Get professional guidance before you renovate — one focused session to bring clarity to your project.",
  url: siteUrl,
  image: `${siteUrl}/01_07_2026_Pixellab7727.jpg.jpeg`,
  telephone: ["+351926574920", "+40726491793"],
  email: "luminita.campian.arh@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Estoril, Cascais",
    addressRegion: "Lisbon",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7069,
    longitude: -9.3984,
  },
  founder: {
    "@type": "Person",
    name: "Luminita Campian",
    jobTitle: "Architect & Interior Designer",
  },
  priceRange: "€160–€220",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card",
  areaServed: {
    "@type": "Place",
    name: "Worldwide (Online Sessions)",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design Advisory Sessions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "60-Minute Interior Design Advisory",
          description:
            "Focused advisory session — one hour of direct guidance on your renovation or interior design decisions.",
        },
        price: "160",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "90-Minute Interior Design Advisory",
          description:
            "Extended advisory session — ninety minutes of in-depth guidance for complex renovation and design projects.",
        },
        price: "220",
        priceCurrency: "EUR",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the floor plan actually work? Can my furniture fit? Is the circulation logical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is the most common mistake I see — people approve floor plans without understanding spatial flow or furniture placement. I'll tell you exactly what works and what doesn't before you commit.",
      },
    },
    {
      "@type": "Question",
      name: "Do these colors, materials, and finishes actually work together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most people choose materials in isolation — tile in one store, paint in another, fixtures somewhere else. Then nothing coheres. I give you an objective overview to validate or rethink your decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I position my lighting fixtures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lighting placement determines whether your space feels comfortable or uncomfortable. I'll show you the principles that make spaces feel right.",
      },
    },
    {
      "@type": "Question",
      name: "What should I choose between these products to achieve my desired result?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I cut through marketing and give you clear reasoning for why one option serves your goals better than another.",
      },
    },
    {
      "@type": "Question",
      name: "What are the actual stages of a renovation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Understanding sequence prevents costly mistakes. I'll walk you through the logical order so you're never redoing work.",
      },
    },
    {
      "@type": "Question",
      name: "What should we prioritize in terms of budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not all €5,000 decisions are equal. I'll show you where investment matters and where it doesn't.",
      },
    },
    {
      "@type": "Question",
      name: "How can my small space accommodate all my needs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small spaces require precision. I'll show you layout solutions that maximize function without feeling cramped.",
      },
    },
    {
      "@type": "Question",
      name: "Who's right — me or my partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I give you objective professional reasoning so you can both move forward aligned on the best solution.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={faqSchema} />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <FAQ />
        <WhoIsItFor />
        <Bridge />
        <Timing />
        <Testimonials />
        <About />
        <Pricing />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
