import { z } from 'zod';
import { PlanetUpdateManyMutationInputObjectSchema } from './objects/PlanetUpdateManyMutationInput.schema';
import { PlanetWhereInputObjectSchema } from './objects/PlanetWhereInput.schema'

export const PlanetUpdateManySchema = z.object({ data: PlanetUpdateManyMutationInputObjectSchema, where: PlanetWhereInputObjectSchema.optional()  })