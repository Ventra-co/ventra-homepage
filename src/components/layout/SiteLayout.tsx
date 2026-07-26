import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ContactModal } from "../contact/ContactModal";

export function SiteLayout() {
  const { pathname, hash } = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="bg-background-surface font-sans text-on-surface flex flex-col min-h-screen m-0 select-none antialiased">
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
