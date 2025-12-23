import * as z from "zod";

export const userFormSchema = z.object({
  id: z.number().optional(),

  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name is too long")
    .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, "Name can only contain letters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .transform((val) => val.trim().toLowerCase())
    .refine((val) => !val.endsWith(".xyz"), {
      message: "Domain .xyz is not allowed",
    }),

  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(
      /^\+?[1-9]\d{7,14}$/,
      "Invalid phone number. Use international E.164 format (e.g. +123456789)"
    ),

  location: z
    .string()
    .min(1, "Location is required")
    .transform((val) => val.trim()),

  company: z
    .string()
    .min(1, "Company is required")
    .transform((val) => val.trim()),

  status: z.enum(["Online", "Offline"], {
    message: "Please select a valid status",
  }),
});

export type UserFormData = z.infer<typeof userFormSchema>;
