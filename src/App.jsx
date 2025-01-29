import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import TechnicalDetails from "./components/TechnicalDetails/TechnicalDetails";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";
import "./styles/main.scss";

function App() {
  return (
    <>
      <HeroSection />
      <SecondaryHeader />
      <ClientsSection />
      <ProductsSection />
      <BenefitsSection />
      <TechnicalDetails />
      <IndustriesSection />
    </>
  );
}

export default App;
