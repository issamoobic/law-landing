import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Trust } from "./sections/Trust";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Lead } from "./sections/Lead";
import { Reviews } from "./sections/Reviews";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
import { StickyCta } from "./components/StickyCta";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Lead />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
