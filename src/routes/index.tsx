import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { AboutSection } from "@/components/AboutSection";
import { CtaBanner } from "@/components/CtaBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { TrainersSection } from "@/components/TrainersSection";
import { Testimonial } from "@/components/Testimonial";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IRONFORGE Fitness — Premium Gym in Los Angeles" },
      { name: "description", content: "Transform your body at IRONFORGE — LA's premier fitness center with 24/7 access, expert trainers, and world-class equipment. Start your free trial today." },
      { property: "og:title", content: "IRONFORGE Fitness — Premium Gym in Los Angeles" },
      { property: "og:description", content: "Transform your body at IRONFORGE — LA's premier fitness center with 24/7 access, expert trainers, and world-class equipment." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <AboutSection />
        <CtaBanner />
        <ServicesSection />
        <TrainersSection />
        <Testimonial />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
