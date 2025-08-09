import { z } from 'zod';
export const PlanetDeleteManyResultSchema = z.object({
  count: z.number()
});