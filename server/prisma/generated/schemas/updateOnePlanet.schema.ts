import { z } from 'zod';
import { PlanetSelectObjectSchema } from './objects/PlanetSelect.schema.js';
import { PlanetUpdateInputObjectSchema } from './objects/PlanetUpdateInput.schema';
import { PlanetUncheckedUpdateInputObjectSchema } from './objects/PlanetUncheckedUpdateInput.schema';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema'

export const PlanetUpdateOneSchema = z.object({ select: PlanetSelectObjectSchema.optional(),  data: z.union([PlanetUpdateInputObjectSchema, PlanetUncheckedUpdateInputObjectSchema]), where: PlanetWhereUniqueInputObjectSchema  })