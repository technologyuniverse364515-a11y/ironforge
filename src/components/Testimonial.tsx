import { text } from "@/config/text";
import { messages } from "@/config/messages";

export function Testimonial() {
  return (
    <section className="gym-section bg-secondary">
      <div className="gym-container max-w-3xl text-center">
        <svg className="mx-auto mb-6 text-primary" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
        <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
          {messages.testimonialQuote}
        </p>
        <p className="text-sm text-muted-foreground font-medium">{messages.testimonialAuthor}</p>
      </div>
    </section>
  );
}
