import { z } from 'zod';
import { PlanetWhereInputObjectSchema } from './objects/PlanetWhereInput.schema';

export const PlanetDeleteManySchema = z.object({
  where: PlanetWhereInputObjectSchema.optional(),
});
