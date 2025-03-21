import FAQS from "./components/FAQS";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItsWork";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <FAQS/>
      <Footer/>
    </div>
  );
}
