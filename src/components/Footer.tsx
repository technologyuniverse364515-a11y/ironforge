import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="gym-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-lg font-extrabold tracking-wider text-foreground">
            {text.brandName}
          </span>
          <p className="text-xs text-muted-foreground mt-1">{text.footerText}</p>
        </div>
        <nav className="flex gap-6">
          {buttons.navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-wide transition-colors"
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
