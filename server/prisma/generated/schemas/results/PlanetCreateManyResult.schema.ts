import { z } from 'zod';
export const PlanetCreateManyResultSchema = z.object({
  count: z.number()
});