import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export function ServicesSection() {
  return (
    <section id="services" className="gym-section bg-secondary">
      <div className="gym-container">
        <div className="text-center mb-12">
          <span className="gym-badge mb-4">{text.servicesSubtitle}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            {text.servicesTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {text.plans.map((plan) => (
            <div
              key={plan.name}
              className={`gym-card ${plan.popular ? "gym-card-popular" : ""} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-1 bg-primary" />
              )}
              {plan.popular && (
                <span className="gym-badge self-start mb-4">Most Popular</span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary text-xs">●</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={buttons.joinNow.link}
                className={plan.popular ? "gym-btn-primary w-full text-center" : "gym-btn-outline w-full text-center"}
              >
                {buttons.joinNow.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
