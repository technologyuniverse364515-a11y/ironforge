import { text } from "@/config/text";

export function ServicesOverview() {
  return (
    <section className="gym-section bg-secondary">
      <div className="gym-container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-foreground">
          {text.servicesOverviewTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.servicesOverviewItems.map((item) => (
            <div key={item.title} className="gym-card text-center group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
