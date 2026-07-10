import ServicesSection from "@/src/component/home/service-section";
import HomeHero from "../home/home";
import WhyChooseUs from "@/src/component/home/choose";
import HowItWorks from "@/src/component/home/its-work";
import VideoSection from "@/src/component/home/video-section";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar is already included inside HomeHero (sticky header for the page).
         If you split it out onto every route instead, remove <Navbar/> from
         inside HomeHero.tsx and keep it only here at the layout level. */}
      <HomeHero />

      {/* Next sections to build in the same "Eyecatchy Mesh" theme: */}
      {/* <TrustedSection /> */}
      {/* <ServicesSection /> */}
      {/* <WhyChooseUs /> */}
      {/* <TestimonialsSection /> */}
      {/* <FAQSection /> */}
      {/* <Footer /> */}
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <VideoSection />
    </main>
  );
}
