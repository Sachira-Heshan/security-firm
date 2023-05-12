import React from "react";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import AboutUsSection from "../Components/AboutUsSection";
import TrustedClientsSection from "../Components/TrustedClientsSection";
import VisualTour from "../Components/VisualTour";
import ConnectWithUs from "../Components/ConnectWithUs";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <TrustedClientsSection />
      <VisualTour />
      <ConnectWithUs />
      <div className="container"></div>
    </div>
  );
}

export default Home;
