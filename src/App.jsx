import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import "./styles/main.scss";

function App() {
  return (
    <>
      <HeroSection />
      <SecondaryHeader></SecondaryHeader>
      <ClientsSection></ClientsSection>
      <ProductsSection></ProductsSection>
    </>
  );
}

export default App;
