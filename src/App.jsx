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
import TurnosHeroSection from "./rollos-turnos/components/HeroSection/TurnosHeroSection";
import TurnosClientsSection from "./rollos-turnos/components/ClientsSection/TurnosClientsSection";
import TurnosProductsSection from "./rollos-turnos/components/ProductsSection/TurnosProductsSection";
import "./styles/main.scss";
import TurnosBenefitsSection from "./rollos-turnos/components/BenefitsSection/TurnosBenefitsSection";
// Importa el LogosProvider
import { LogosProvider } from "./context/LogosContext"; // Asegúrate de que la ruta sea correcta
import TurnosTechnicalDetails from "./rollos-turnos/components/TechnicalDetails/TurnosTechnicalDetails";
import TurnoIndustriesSection from "./rollos-turnos/components/IndustriesSection/TurnoIndustriesSection";
import TurnosRelatedProducts from "./rollos-turnos/components/RelatedProducts/TurnosRelatedProducts";
import WppBtn from "./components/WppBtn/WppBtn";

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
      <WppBtn />
      <Footer />
    </>
  );
}

function RollosTurnosLanding() {
  return (
    <>
      <TurnosHeroSection />
      <SecondaryHeader />
      <TurnosClientsSection />
      <TurnosProductsSection />
      <TurnosBenefitsSection />
      <TurnosTechnicalDetails />
      <TurnoIndustriesSection />
      <TurnosRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function App() {
  return (
    // Envuelve todo en LogosProvider para tener acceso al contexto
    <LogosProvider>
      <Router>
        <Routes>
          {/* Ruta para la landing de rollos térmicos */}
          {/* <Route path="/rollos-termicos" element={<RollosTermicosLanding />} /> */}
          <Route path="/" element={<RollosTermicosLanding />} />
          <Route path="/rollos-turnos" element={<RollosTurnosLanding />} />
        </Routes>
      </Router>
    </LogosProvider>
  );
}

export default App;
