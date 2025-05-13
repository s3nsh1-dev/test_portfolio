import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardContainer from "../components/CardContainer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="mx-[23.5%]">
      <Navbar />
      <HeroSection />
      <CardContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
