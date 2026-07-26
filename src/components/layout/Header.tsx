import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { INSIGHTS_ENABLED } from "../../config/features";
import ventraLogoColor from "../../../ventra-logo-color-master.png";

interface DropdownItem {
  label: string;
  href: string;
}

export function Header({ onOpenContact }: { onOpenContact?: () => void }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const businessFocusItems: DropdownItem[] = [
    { label: "Observability / Optimization", href: "/business-focus/observability-optimization" },
    { label: "API / Integration", href: "/business-focus/api-integration" },
    { label: "Security / Automation", href: "/business-focus/security-automation" },
    { label: "Business Building Consulting", href: "/business-focus/business-building" },
  ];

  const solutionsItems: DropdownItem[] = [
    { label: "JENNIFER AI Operations", href: "/solutions/jennifer-ai-operations" },
    { label: "SIMMS-ITM", href: "/solutions/simms-itm" },
    { label: "Felice Kafka Operations", href: "/solutions/felice-kafka-operations" },
    { label: "UCLM Certificate Lifecycle Automation", href: "/solutions/uclm" },
  ];

  const isHome = pathname === "/";

  return (
    <nav className="w-full bg-white border-b border-border-subtle relative z-50">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
        
        {/* Brand Logo */}
        <Link className="flex items-center gap-2" to="/">
          <img
            alt="VENTRA Logo"
            className="h-6 md:h-7 w-auto object-contain hover:opacity-90 transition-opacity"
            src={ventraLogoColor}
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 items-center font-body-default text-body-default text-on-surface-variant h-full">
          <Link className={isHome ? "text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer transition-all hover:text-accent" : "font-semibold text-on-surface-variant hover:text-accent cursor-pointer transition-all"} to="/">HOME</Link>

          <div className="relative cursor-pointer transition-all h-full flex items-center hover:text-accent" onMouseEnter={() => setActiveDropdown("focus")} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 py-4">
              <span className="font-semibold text-on-surface-variant hover:text-accent">BUSINESS FOCUS</span>
              <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
            </div>
            <AnimatePresence>
              {activeDropdown === "focus" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 bg-white border border-border-subtle rounded-lg shadow-lg py-2 min-w-[280px]">
                  {businessFocusItems.map((item, index) => (
                    <Link key={index} to={item.href} className="block px-6 py-3 text-caption font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-accent transition-colors">{item.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative cursor-pointer transition-all h-full flex items-center hover:text-accent" onMouseEnter={() => setActiveDropdown("solutions")} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="flex items-center gap-1 py-4">
              <span className="font-semibold text-on-surface-variant hover:text-accent">SOLUTIONS</span>
              <span className="material-symbols-outlined text-[20px]">arrow_drop_down</span>
            </div>
            <AnimatePresence>
              {activeDropdown === "solutions" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 bg-white border border-border-subtle rounded-lg shadow-lg py-2 min-w-[320px]">
                  {solutionsItems.map((item, index) => (
                    <Link key={index} to={item.href} className="block px-6 py-3 text-caption font-medium text-on-surface-variant hover:bg-surface-container-low hover:text-accent transition-colors">{item.label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {INSIGHTS_ENABLED && (
            <Link className="cursor-pointer font-semibold transition-all hover:text-accent duration-200" to="/insights">INSIGHTS</Link>
          )}
          <Link className="cursor-pointer font-semibold transition-all hover:text-accent duration-200" to="/about">ABOUT</Link>
        </div>

        {/* Trailing Action */}
        <button onClick={onOpenContact} className="hidden md:flex items-center justify-center bg-primary text-white px-6 h-[36px] rounded-[4px] font-body-default text-caption font-bold transition-all hover:bg-primary-container">
          CONTACT
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-primary focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined text-[28px]">{isMobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="md:hidden border-t border-border-subtle bg-white overflow-hidden">
            <div className="px-margin-mobile py-6 flex flex-col gap-4">
              <Link className={isHome ? "font-bold text-primary py-2 border-b border-border-subtle" : "font-semibold text-on-surface-variant py-2 border-b border-border-subtle"} to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <div>
                <div className="font-semibold text-on-surface-variant py-2">BUSINESS FOCUS</div>
                <div className="pl-4 flex flex-col gap-2 border-l border-border-subtle my-1">
                  {businessFocusItems.map((item, index) => (
                    <Link key={index} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-caption text-on-surface-variant hover:text-accent py-1">{item.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold text-on-surface-variant py-2">SOLUTIONS</div>
                <div className="pl-4 flex flex-col gap-2 border-l border-border-subtle my-1">
                  {solutionsItems.map((item, index) => (
                    <Link key={index} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-caption text-on-surface-variant hover:text-accent py-1">{item.label}</Link>
                  ))}
                </div>
              </div>
              {INSIGHTS_ENABLED && (
                <Link className="font-semibold text-on-surface-variant py-2 hover:text-accent" to="/insights" onClick={() => setIsMobileMenuOpen(false)}>INSIGHTS</Link>
              )}
              <Link className="font-semibold text-on-surface-variant py-2 hover:text-accent" to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact?.(); }} className="flex items-center justify-center bg-primary text-white w-full py-3 rounded-[4px] font-bold mt-4">CONTACT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
