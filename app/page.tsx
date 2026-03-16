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

export default function Home() {
  return (
    <>
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
