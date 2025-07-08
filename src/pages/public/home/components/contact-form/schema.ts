import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  subject: z.string().min(5),
  email: z.string().email(),
  phone: z.string(),
  message: z.string().min(20),
});
