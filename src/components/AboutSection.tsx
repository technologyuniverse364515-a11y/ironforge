import { text } from "@/config/text";

export function AboutSection() {
  return (
    <section id="about" className="gym-section">
      <div className="gym-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="gym-badge mb-4">{text.aboutSubtitle}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
            {text.aboutTitle}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            {text.aboutText}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-extrabold text-center mb-8 text-foreground">
            {text.whyChooseTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {text.whyChooseItems.map((item) => (
              <div key={item.title} className="gym-card flex gap-4 items-start">
                <div className="w-10 h-10 flex-shrink-0 bg-primary/15 flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
