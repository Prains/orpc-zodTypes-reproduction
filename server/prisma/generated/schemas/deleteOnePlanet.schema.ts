import { z } from 'zod';
import { PlanetSelectObjectSchema } from './objects/PlanetSelect.schema.js';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema'

export const PlanetDeleteOneSchema = z.object({ select: PlanetSelectObjectSchema.optional(),  where: PlanetWhereUniqueInputObjectSchema  })