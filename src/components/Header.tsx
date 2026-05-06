import { useState, useEffect } from "react";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="gym-urgency-bar">{messages.urgency}</div>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
        style={{ top: scrolled ? 0 : "2.3rem" }}
      >
        <div className="gym-container flex items-center justify-between py-4 px-4">
          <a href="#home" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-wider text-foreground">
              {text.brandName}
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
              {text.tagline}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {buttons.navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {item.text}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={buttons.callNow.link} className="gym-btn-outline text-xs py-2 px-4">
              {buttons.callNow.text}
            </a>
            <a href={buttons.joinNow.link} className="gym-btn-primary text-xs py-2 px-4">
              {buttons.joinNow.text}
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
            <nav className="flex flex-col p-4 gap-4">
              {buttons.navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide"
                >
                  {item.text}
                </a>
              ))}
              <a href={buttons.joinNow.link} className="gym-btn-primary text-center mt-2">
                {buttons.joinNow.text}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
