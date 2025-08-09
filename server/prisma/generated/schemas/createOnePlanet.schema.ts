import { z } from 'zod';
import { PlanetSelectObjectSchema } from './objects/PlanetSelect.schema.js';
import { PlanetCreateInputObjectSchema } from './objects/PlanetCreateInput.schema';
import { PlanetUncheckedCreateInputObjectSchema } from './objects/PlanetUncheckedCreateInput.schema'

export const PlanetCreateOneSchema = z.object({ select: PlanetSelectObjectSchema.optional(),  data: z.union([PlanetCreateInputObjectSchema, PlanetUncheckedCreateInputObjectSchema])  })