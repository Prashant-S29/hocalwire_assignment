import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_FAKESTORE_API_KEY: z.string().min(1),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_FAKESTORE_API_KEY: process.env.NEXT_PUBLIC_FAKESTORE_API_KEY,
});
