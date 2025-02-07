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
import EncuestaVirtualHeroSection from "./encuesta-virtual/components/HeroSection/EncuestaVirtualHeroSection";
import EncuestaVirtualProductsSection from "./encuesta-virtual/components/ProductsSection/EncuestaVirtualProductsSection";
import EncuestaVirtualBenefitsSection from "./encuesta-virtual/components/BenefitsSection/EncuestaVirtualBenefitsSection";
import SecondaryEncuestaVirtualProductsSection from "./encuesta-virtual/components/SecondaryProductsSection/SecondaryEncuestaVirtualProductsSection";
import EncuestaVirtualIndustriesSection from "./encuesta-virtual/components/IndustriesSection/EncuestaVirtualIndustriesSection";
import EncuestaVirtualRelatedProducts from "./encuesta-virtual/components/RelatedProducts/EncuestaVirtualRelatedProducts";
import EnfermeriaHeroSection from "./enfermeria/components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaProductsSection from "./enfermeria/components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaBenefitsSection from "./enfermeria/components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaSecondaryProductsSection from "./enfermeria/components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "./enfermeria/components/StepsSection/StepsSectionEnfermeria";
import EnfermeriaIndustriesSection from "./enfermeria/components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaRelatedProducts from "./enfermeria/components/RelatedProducts/EnfermeriaRelatedProducts";
import LlamadorMeserosHeroSection from "./llamador-meseros/components/HeroSection/LlamadorMeserosHeroSection";
import LlamadorMeserosProductsSection from "./llamador-meseros/components/ProductsSection/LlamadorMeserosProductsSection";
import LlamadorMeserosBenefitsSection from "./llamador-meseros/components/BenefitsSection/LlamadorMeserosBenefitsSection";
import StepsSectionLlamadorMeseros from "./llamador-meseros/components/StepsSection/StepsSectionLlamadorMeseros";
import LlamadorMeserosSecondaryProductsSection from "./llamador-meseros/components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection";
import LlamadorMeserosIndustriesSection from "./llamador-meseros/components/IndustriesSection/LlamadorMeserosIndustriesSection";
import LlamadorMeserosRelatedProducts from "./llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import LocalizadoresHeroSection from "./localizadores/components/HeroSection/LocalizadoresHeroSection";
import LocalizadoresProductsSection from "./localizadores/components/ProductsSection/LocalizadoresProductsSection";
import LocalizadoresBenefitsSection from "./localizadores/components/BenefitsSection/LocalizadoresBenefitsSection";
import LocalizadoresSecondaryProductsSection from "./localizadores/components/SecondaryProductsSection/LocalizadoresSecondaryProductsSection";
import LocalizadoresRelatedProducts from "./localizadores/components/RelatedProducts/LocalizadoresRelatedProducts";
import LocalizadoresIndustriesSection from "./localizadores/components/IndustriesSection/LocalizadoresIndustriesSection";
import TurnoMasterHeroSection from "./turnomaster/components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterProductsSection from "./turnomaster/components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterBenefitsSection from "./turnomaster/components/BenefitsSection/TurnoMasterBenefitsSection";
import SecondaryTurnoMasterProductsSection from "./turnomaster/components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";
import TurnoMasterIndustriesSection from "./turnomaster/components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterRelatedProducts from "./turnomaster/components/RelatedProducts/TurnoMasterRelatedProducts";
import InfiniteSlider from "./components/sliders/InfiniteSlider";

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

function EnfermeriaLanding() {
  return (
    <>
      <EnfermeriaHeroSection />
      <TurnoExpressClientsSection />
      <EnfermeriaProductsSection />
      <EnfermeriaBenefitsSection />
      <EnfermeriaSecondaryProductsSection />
      <StepsSectionEnfermeria />
      <EnfermeriaIndustriesSection />
      <EnfermeriaRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function LlamadorMeserosLanding() {
  return (
    <>
      <LlamadorMeserosHeroSection />
      <TurnoExpressClientsSection />
      <LlamadorMeserosProductsSection />
      <LlamadorMeserosBenefitsSection />
      <StepsSectionLlamadorMeseros />
      <LlamadorMeserosSecondaryProductsSection />
      <LlamadorMeserosIndustriesSection />
      <LlamadorMeserosRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function LocalizadoresLanding() {
  return (
    <>
      <LocalizadoresHeroSection />
      <TurnoExpressClientsSection />
      <LocalizadoresProductsSection />
      <LocalizadoresBenefitsSection />
      <LocalizadoresSecondaryProductsSection />
      <LocalizadoresIndustriesSection />
      <LocalizadoresRelatedProducts />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}

function TurnoMasterLanding() {
  return (
    <>
      <TurnoMasterHeroSection />
      <TurnoExpressClientsSection />
      <TurnoMasterProductsSection />
      <TurnoMasterBenefitsSection />
      <SecondaryTurnoMasterProductsSection />
      <TurnoMasterIndustriesSection />
      <TurnoMasterRelatedProducts />
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
          <Route path="/enfermeria" element={<EnfermeriaLanding />} />
          <Route
            path="/llamador-meseros"
            element={<LlamadorMeserosLanding />}
          />
          <Route path="/localizadores" element={<LocalizadoresLanding />} />
          <Route path="/turnomaster" element={<TurnoMasterLanding />} />
        </Routes>
      </Router>
    </LogosProvider>
  );
}

export default App;
