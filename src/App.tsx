import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { GallerySection } from './components/GallerySection';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { BookingCtaSection } from './components/BookingCtaSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-villa-100 selection:text-villa-900">
      {/* 01. Header */}
      <Header />

      <main className="flex-grow">
        {/* 02. Hero Principal */}
        <Hero />

        {/* 03. Apresentação da Clínica */}
        <AboutSection />

        {/* 04. Tratamentos Odontológicos */}
        <TreatmentsSection />

        {/* 05. Conheça Nossa Clínica / Galeria */}
        <GallerySection />

        {/* 06. Profissionais (oculta na versão pública conforme regra ética do briefing) */}
        <TeamSection />

        {/* 07. Avaliações do Google */}
        <ReviewsSection />

        {/* 08. Localização com Mapa */}
        <LocationSection />

        {/* 09. Agendamento & Conversão */}
        <BookingCtaSection />
      </main>

      {/* 10. Rodapé */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
}

export default App;
