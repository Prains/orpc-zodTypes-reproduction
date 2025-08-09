import { z } from 'zod';
import { PlanetCreateInputObjectSchema } from './objects/PlanetCreateInput.schema';
import { PlanetUncheckedCreateInputObjectSchema } from './objects/PlanetUncheckedCreateInput.schema';

export const PlanetCreateOneSchema = z.object({
  data: z.union([
    PlanetCreateInputObjectSchema,
    PlanetUncheckedCreateInputObjectSchema,
  ]),
});
