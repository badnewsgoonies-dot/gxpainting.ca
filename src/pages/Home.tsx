import Hero from "../components/Hero";
import EstimateBand from "../components/EstimateBand";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import StickyMobileCTA from "../components/StickyMobileCTA";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema
        name="GX Painting LTD"
        url="https://gxpainting.com/"
        email="gxpainting@hotmail.com"
        telephone="+1-416-560-8741"
        locality="King City"
        region="ON"
        country="CA"
        areaServed="Greater Toronto Area"
      />
      <Hero />
      <EstimateBand />
      <Gallery />
      <Reviews />
      <FAQ />
      <ContactSection />
      <StickyMobileCTA />
    </>
  );
}
