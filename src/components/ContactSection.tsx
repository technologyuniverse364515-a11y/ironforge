import { useState } from "react";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = messages.formValidation.nameRequired;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = messages.formValidation.emailRequired;
    if (!form.phone.trim()) errs.phone = messages.formValidation.phoneRequired;
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="gym-section bg-secondary">
      <div className="gym-container">
        <div className="text-center mb-12">
          <span className="gym-badge mb-4">{text.contactSubtitle}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            {text.contactTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {submitted ? (
              <div className="gym-card flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-lg font-bold text-foreground">{messages.formSuccess}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-input border border-border p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-input border border-border p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-input border border-border p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
                </div>
                <button type="submit" className="gym-btn-primary w-full">
                  {buttons.sendMessage.text}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="gym-card">
              <h3 className="font-bold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>📍 {text.contactAddress}</p>
                <p>📞 {text.contactPhone}</p>
                <p>✉️ {text.contactEmail}</p>
                <p>🕐 {text.contactHours}</p>
              </div>
              <a href={buttons.callNow.link} className="gym-btn-primary w-full text-center mt-6">
                {buttons.callNow.text}
              </a>
            </div>

            <div className="gym-card overflow-hidden p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
