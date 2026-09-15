import Email from "@/components/Email";
import ContactForm from "@/components/ContactForm";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
return (
<section id="contact" className="py-24 border-t border-border">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-xs uppercase tracking-widest text-foreground mb-10 font-mono">
      Get in touch
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left: CTA + email + socials */}
      <div className="flex flex-col justify-between gap-12">
        <div>
          <h2 className="font-extrabold font-display leading-[0.88] tracking-tight mb-10" style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)" , }}>
            Got something
            <br />
            to build?
          </h2>
          <p className="text-foreground leading-relaxed max-w-sm">
            Whether it&apos;s a product from scratch, a redesign, or just a
            frontend that&apos;s been embarrassing you — drop me a line. I
            respond within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground mb-3 font-mono">
              Or email directly
            </p>
          </div>
          <Email />

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground mb-3 font-mono">
              Elsewhere
            </p>
            <div className="flex flex-wrap gap-5">
              {[
              {
              label: "GitHub",
              url: "https://github.com/ShahabAthar25",
              },
              // Not created next three will do in the future
              { label: "LinkedIn", url: "https://linkedin.com" },
              { label: "Dribbble", url: "https://dribbble.com" },
              { label: "Read.cv", url: "https://read.cv" },
              ].map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 text-foreground hover:text-foreground transition-colors font-mono">
                {link.label}
                <ArrowUpRight className="w-3 h-3" />
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <ContactForm />
    </div>
  </div>
</section>
);
}
