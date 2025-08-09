import { z } from 'zod';
export const PlanetUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});