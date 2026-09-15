"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import ContactFormInput from "@/components/ContactFormInput";
import {
formDataSchema,
FormData,
FormErrors,
SUBJECT_OPTIONS,
} from "@/lib/types/contact";

const initialFormState: FormData = {
name: "",
email: "",
subject: "Project / Freelance Inquiry",
message: "",
};

export default function ContactForm() {
const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
  "idle",
  );
  const [formData, setFormData] = useState<FormData>(initialFormState);
    const [errors, setErrors] = useState<FormErrors>({});

      const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error for field once user starts typing
      if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
      };

      const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate using Zod
        const result = formDataSchema.safeParse(formData);

        if (!result.success) {
        const fieldErrors: FormErrors = {};
        result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormData;
        if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = issue.message;
        }
        });
        setErrors(fieldErrors);
        return;
        }

        // Process valid form
        setErrors({});
        setFormStatus("sending");

        try {
        // API call simulation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormStatus("sent");
        setFormData(initialFormState);
        } catch {
        setFormStatus("idle");
        }
        };

        return (
        <div className="border border-border bg-card p-8">
          {formStatus === "sent" ? (
          <div className="h-full flex flex-col items-start justify-center gap-4 py-12">
            <div className="text-5xl font-extrabold font-display" style={{ color: "var(--accent)" }}>
              Sent.
            </div>
            <p className="text-foreground leading-relaxed">
              Got it — I&apos;ll be in touch within 24 hours. If it&apos;s urgent,
              feel free to email me directly.
            </p>
            <button onClick={()=> setFormStatus("idle")}
              className="text-xs font-mono text-foreground hover:text-foreground transition-colors mt-2"
              >
              Send another →
            </button>
          </div>
          ) : (
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactFormInput label="Your name" name="name" placeholder="Alex, Beatriz, Jordan…" value={formData.name}
                error={errors.name} onChange={(e)=> handleInputChange("name", e.target.value)}
                />
                <ContactFormInput label="Email" name="email" placeholder="you@company.com" value={formData.email}
                  error={errors.email} onChange={(e)=> handleInputChange("email", e.target.value)}
                  />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-widest text-foreground">
                Subject
              </label>

              {/* Relative wrapper for absolute positioning of the chevron */}
              <div className="relative flex items-center">
                <select id="subject" value={formData.subject} onChange={(e)=>
                  handleInputChange(
                  "subject",
                  e.target.value as FormData["subject"],
                  )
                  }
                  className="w-full bg-secondary border text-foreground px-4 py-3 pr-10 text-sm
                  appearance-none cursor-pointer focus:outline-none focus:border-accent transition-colors duration-200"
                  >
                  {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                  ))}
                </select>

                {/* Custom Dropdown Arrow */}
                <ChevronDown className="w-4 h-4 absolute right-3 pointer-events-none text-foreground" />
              </div>

              {errors.subject && (
              <span className="text-xs text-red-500 font-mono">
                {errors.subject}
              </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-foreground">
                What are you building?
              </label>
              <textarea rows={5} placeholder="Tell me about the project..." value={formData.message} onChange={(e)=>
                handleInputChange("message", e.target.value)}
                className="w-full bg-secondary border border-border text-foreground placeholder:text-foreground
                focus:outline-none focus:border-accent transition-colors duration-200 px-4 py-3 text-sm resize-none"
                />
                {errors.message && (
                <span className="text-xs text-red-500 font-mono">
                  {errors.message}
                </span>
                )}
            </div>

            <button type="submit" disabled={formStatus==="sending" }
              className="flex items-center justify-between gap-4 px-6 py-4 border border-border text-sm font-medium transition-all duration-200 group disabled:opacity-60"
              style={{ backgroundColor: formStatus==="sending" ? "var(--accent)" : "transparent" , color:
              formStatus==="sending" ? "var(--accent-foreground)" : "var(--foreground)" , borderColor:
              formStatus==="sending" ? "var(--accent)" : undefined, }} onMouseEnter={(e)=> {
              if (formStatus === "idle") {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--accent)";
              (e.currentTarget as HTMLButtonElement).style.color =
              "var(--accent-foreground)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
              "var(--accent)";
              }
              }}
              onMouseLeave={(e) => {
              if (formStatus === "idle") {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "transparent";
              (e.currentTarget as HTMLButtonElement).style.color =
              "var(--foreground)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "";
              }
              }}
              >
              <span>
                {formStatus === "sending" ? "Sending…" : "Send message"}
              </span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
          )}
        </div>
        );
        }
