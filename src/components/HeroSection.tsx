import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Premium gym interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="relative gym-container w-full px-4 pt-32 pb-20">
        <div className="max-w-2xl">
          <span className="gym-badge mb-6 inline-block">{messages.trialBadge}</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 whitespace-pre-line text-foreground animate-fade-in-up">
            {text.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 animate-fade-in-up animate-delay-100">
            {text.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
            <a href={buttons.getStarted.link} className="gym-btn-primary">
              {buttons.getStarted.text}
            </a>
            <a href={buttons.viewPlans.link} className="gym-btn-outline">
              {buttons.viewPlans.text}
            </a>
          </div>
          <div className="mt-10 flex gap-8 animate-fade-in-up animate-delay-300">
            <div>
              <div className="text-2xl font-extrabold text-foreground">10K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Members</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-foreground">50+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Classes</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-foreground">24/7</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Open</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
