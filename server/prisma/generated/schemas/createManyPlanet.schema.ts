import { z } from 'zod';
import { PlanetCreateManyInputObjectSchema } from './objects/PlanetCreateManyInput.schema';

export const PlanetCreateManySchema = z.object({
  data: z.union([
    PlanetCreateManyInputObjectSchema,
    z.array(PlanetCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
