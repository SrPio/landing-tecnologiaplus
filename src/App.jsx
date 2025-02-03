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
import DispensadorTiquetesHeroSection from "./dispensador-tiquetes/components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesClientsSection from "./dispensador-tiquetes/components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesProductsSection from "./dispensador-tiquetes/components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesBenefitsSection from "./dispensador-tiquetes/components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesIndustriesSection from "./dispensador-tiquetes/components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesRelatedProducts from "./dispensador-tiquetes/components/RelatedProducts/DispensadorTiquetesRelatedProducts";
import TurnoExpressHeroSection from "./turnero-turnoexpress/components/HeroSection/TurnoExpressHeroSection";
import TurnoExpressClientsSection from "./turnero-turnoexpress/components/ClientsSection/TurnoExpressClientsSection";
import TurnoExpressBenefitsSection from "./turnero-turnoexpress/components/BenefitsSection/TurnoExpressBenefitsSection";
import TurnoExpressProductsSection from "./turnero-turnoexpress/components/ProductsSection/TurnoExpressProductsSection";
import TurnoExpressRelatedProducts from "./turnero-turnoexpress/components/RelatedProducts/TurnoExpressRelatedProducts";
import TurnoExpressIndustriesSection from "./turnero-turnoexpress/components/IndustriesSection/TurnoExpressIndustriesSection";
import SecondaryTurnoExpressProductsSection from "./turnero-turnoexpress/components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection";
import CalificadorHeroSection from "./calificador/components/HeroSection/CalificadorHeroSection";
import CalificadorBenefitsSection from "./calificador/components/BenefitsSection/CalificadorBenefitsSection";
import SecondaryCalificadorProductsSection from "./calificador/components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import CalificadorIndustriesSection from "./calificador/components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorRelatedProducts from "./calificador/components/RelatedProducts/CalificadorRelatedProducts";
import StepsSectionCalificador from "./calificador/components/StepsSection/StepsSectionCalificador";
import CalificadorProductsSection from "./calificador/components/ProductsSection/CalificadorProductsSection";
import EncuestaVirtualHeroSection from "./encuesta-vitual/components/HeroSection/EncuestaVirtualHeroSection";
import EncuestaVirtualProductsSection from "./encuesta-vitual/components/ProductsSection/EncuestaVirtualProductsSection";
import EncuestaVirtualBenefitsSection from "./encuesta-vitual/components/BenefitsSection/EncuestaVirtualBenefitsSection";
import SecondaryEncuestaVirtualProductsSection from "./encuesta-vitual/components/SecondaryProductsSection/SecondaryEncuestaVirtualProductsSection";
import EncuestaVirtualIndustriesSection from "./encuesta-vitual/components/IndustriesSection/EncuestaVirtualIndustriesSection";
import EncuestaVirtualRelatedProducts from "./encuesta-vitual/components/RelatedProducts/EncuestaVirtualRelatedProducts";

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

function DispensadorTiquetesLanding() {
  return (
    <>
      <DispensadorTiquetesHeroSection />
      <DispensadorTiquetesClientsSection />
      <DispensadorTiquetesProductsSection />
      <DispensadorTiquetesBenefitsSection />
      <DispensadorTiquetesIndustriesSection />
      <DispensadorTiquetesRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function TurnoExpressLanding() {
  return (
    <>
      <TurnoExpressHeroSection />
      <TurnoExpressClientsSection />
      <TurnoExpressProductsSection />
      <TurnoExpressBenefitsSection />
      <SecondaryTurnoExpressProductsSection />
      <TurnoExpressIndustriesSection />
      <TurnoExpressRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function CalificadorLanding() {
  return (
    <>
      <CalificadorHeroSection />
      <TurnoExpressClientsSection />
      <CalificadorProductsSection />
      <CalificadorBenefitsSection />
      <SecondaryCalificadorProductsSection />
      <StepsSectionCalificador />
      <CalificadorIndustriesSection />
      <CalificadorRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function EncuestaVirtualLanding() {
  return (
    <>
      <EncuestaVirtualHeroSection />
      <TurnoExpressClientsSection />
      <EncuestaVirtualProductsSection />
      <EncuestaVirtualBenefitsSection />
      <SecondaryEncuestaVirtualProductsSection />
      <EncuestaVirtualIndustriesSection />
      <EncuestaVirtualRelatedProducts />
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
          {/* <Route path="/rollos-termicos" element={<RollosTermicosLanding />} /> */}
          <Route path="/" element={<RollosTermicosLanding />} />
          <Route path="/rollos-turnos" element={<RollosTurnosLanding />} />
          <Route
            path="/dispensador-tiquetes"
            element={<DispensadorTiquetesLanding />}
          />
          <Route
            path="/turnero-turnoexpress"
            element={<TurnoExpressLanding />}
          />
          <Route path="/calificador" element={<CalificadorLanding />} />
          <Route
            path="/encuesta-virtual"
            element={<EncuestaVirtualLanding />}
          />
        </Routes>
      </Router>
    </LogosProvider>
  );
}

export default App;
