import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('4000'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  CORS_ORIGIN: z.string().default('http://localhost:3000'),
  SIM_TICK_INTERVAL_MS: z.string().default('2000'),
});

export const env = envSchema.parse(process.env);
