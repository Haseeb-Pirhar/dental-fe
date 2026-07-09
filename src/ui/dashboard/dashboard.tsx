import HomeHero from "../home/home";

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
    </main>
  );
}
