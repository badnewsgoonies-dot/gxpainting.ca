// src/App.tsx
import * as React from "react";
import SiteHeader from "./layout/SiteHeader";
import SiteFooter from "./layout/SiteFooter";
import Home from "./pages/Home";
import StickyMobileCTA from "./components/StickyMobileCTA";
import LocalBusinessSchema from "./components/LocalBusinessSchema";

export default function App() {
  return (
    <>
      <LocalBusinessSchema
        name="GX Painting LTD"
        url="https://gxpainting.com"
        email="gxpainting@hotmail.com"
        telephone="+1-416-560-8741"
        locality="Toronto"
        region="Ontario"
        country="CA"
        areaServed="GTA"
      />
      <SiteHeader />
      <Home />
      <StickyMobileCTA />
      <SiteFooter />
    </>
  );
}