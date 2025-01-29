import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./rollos-termicos/components/HeroSection/HeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import ClientsSection from "./rollos-termicos/components/ClientsSection/ClientsSection";
import ProductsSection from "./rollos-termicos/components/ProductsSection/ProductsSection";
import BenefitsSection from "./rollos-termicos/components/BenefitsSection/BenefitsSection";
import TechnicalDetails from "./rollos-termicos/components/TechnicalDetails/TechnicalDetails";
import IndustriesSection from "./rollos-termicos/components/IndustriesSection/IndustriesSection";
import RelatedProducts from "./rollos-termicos/components/RelatedProducts/RelatedProducts";
import ContactForm from "./rollos-termicos/components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

function RollosTermicosLanding() {
  return (
    <>
      <HeroSection />
      <SecondaryHeader />
      <ClientsSection />
      <ProductsSection />
      <BenefitsSection />
      <TechnicalDetails />
      <IndustriesSection />
      <RelatedProducts />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la landing de rollos térmicos */}
        {/* <Route path="/rollos-termicos" element={<RollosTermicosLanding />} /> */}
        <Route path="/" element={<RollosTermicosLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
