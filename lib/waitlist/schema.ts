import { z } from "zod";
import { ROLE_VALUES } from "@/lib/data/roles";
import { COMPANY_SIZE_VALUES } from "@/lib/data/company-sizes";
import { COUNTRY_VALUES } from "@/lib/data/countries";

// Shared between the client form and the API route so both sides enforce
// exactly the same rules.
export const waitlistSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Full name must be under 80 characters."),
  workEmail: z
    .string()
    .trim()
    .min(1, "Enter your work email.")
    .max(254, "Email must be under 254 characters.")
    .email("Enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(100, "Company name must be under 100 characters.")
    .optional()
    .or(z.literal("")),
  role: z.enum(ROLE_VALUES, { message: "Select your role." }),
  country: z.enum(COUNTRY_VALUES, { message: "Select your country." }),
  companySize: z.enum(COMPANY_SIZE_VALUES).optional(),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
