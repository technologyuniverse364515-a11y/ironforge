import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";

export function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.ctaBanner}
          alt="Gym atmosphere"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={768}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <div className="relative gym-container text-center px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          {text.ctaBannerTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          {text.ctaBannerSubtitle}
        </p>
        <a href={buttons.freeTrial.link} className="gym-btn-primary text-lg px-10 py-4">
          {buttons.freeTrial.text}
        </a>
      </div>
    </section>
  );
}
