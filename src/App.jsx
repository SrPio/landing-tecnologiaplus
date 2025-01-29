import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import "./styles/main.scss";

function App() {
  return (
    <>
      <HeroSection />
      <SecondaryHeader />
      <ClientsSection />
      <ProductsSection />
      <BenefitsSection />
    </>
  );
}

export default App;
