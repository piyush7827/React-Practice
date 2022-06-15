import React from "react";
import NavBar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import AppSection from "./Component/AppSection";
import CardSection from "./Component/CardSection";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />

      <CardSection />
      <AppSection />
      <Footer />
    </div>
  );
};

export default App;
