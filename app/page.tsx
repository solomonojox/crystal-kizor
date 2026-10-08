import About from "./components/about";
import Contact from "./components/contact";
import Ecosystem from "./components/ecosystem";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Speaking from "./components/speaking";
import StudioFeature from "./components/studio-feature";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <StudioFeature />
      <Ecosystem />
      <Speaking />
      <Contact />
      <Footer />
    </main>
  );
}