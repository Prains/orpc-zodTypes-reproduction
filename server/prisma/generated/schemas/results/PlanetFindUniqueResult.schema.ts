import { z } from 'zod';
export const PlanetFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));