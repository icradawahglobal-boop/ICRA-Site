import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import MapSection from "./components/MapSection"; // <-- Added
import Tour from "./components/Tour";
import DonateSection from "./components/DonateSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <MapSection /> {/* <-- Added */}
      <Tour />
      <DonateSection />
      <Footer />
    </main>
  );
}