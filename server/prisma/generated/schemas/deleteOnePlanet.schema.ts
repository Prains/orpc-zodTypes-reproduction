import { z } from 'zod';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';

export const PlanetDeleteOneSchema = z.object({
  where: PlanetWhereUniqueInputObjectSchema,
});
