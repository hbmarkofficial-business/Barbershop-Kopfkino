import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bielefeld | Barbershop Kopfkino</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Barbershop Kopfkino in Bielefeld für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bielefeld"
        />
        <link rel="canonical" href="https://barbershop-kopfkino.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Barbershop Kopfkino | Premium Barbershop Bielefeld" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bielefeld."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbershop-kopfkino.de" />
        <meta property="og:image" content="https://barbershop-kopfkino.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Barbershop Kopfkino | Premium Barbershop Bielefeld" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://barbershop-kopfkino.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Barbershop Kopfkino",
            "image": "https://barbershop-kopfkino.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "August-Bebel-Straße 151",
              "addressLocality": "Bielefeld",
              "postalCode": "33602",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.0226",
              "longitude": "8.5331"
            },
            "url": "https://barbershop-kopfkino.de",
            "telephone": "+49 176 62918126",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/barbershopkopfkino",
              "https://www.instagram.com/barbershopkopfkino"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

