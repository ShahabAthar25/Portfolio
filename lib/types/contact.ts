import { z } from "zod";

export const SUBJECT_OPTIONS = [
  "Project / Freelance Inquiry",
  "Full-time / Contract Role",
  "General Question / Networking",
] as const;

export const formDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum(SUBJECT_OPTIONS, {
    message: "Please select a valid subject option",
  }),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

// Auto-derive TypeScript type directly from the Zod schema
export type FormData = z.infer<typeof formDataSchema>;
export type FormErrors = Partial<Record<keyof FormData, string>>;
