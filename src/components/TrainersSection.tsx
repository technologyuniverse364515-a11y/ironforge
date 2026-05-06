import { text } from "@/config/text";
import { images } from "@/config/images";

export function TrainersSection() {
  return (
    <section id="trainers" className="gym-section">
      <div className="gym-container">
        <div className="text-center mb-12">
          <span className="gym-badge mb-4">{text.trainersSubtitle}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            {text.trainersTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.trainers.map((trainer, i) => (
            <div key={trainer.name} className="gym-card group overflow-hidden p-0">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images.trainers[i]}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{trainer.name}</h3>
                <p className="text-sm text-primary font-medium">{trainer.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{trainer.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
