import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import LogoTicker from "@/components/LogoTicker/LogoTicker";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-100">
      <Header />
      <HeroSection />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
