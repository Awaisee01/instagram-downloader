import FAQS from "./components/FAQS";
import Features from "./components/Features";
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
    </div>
  );
}
