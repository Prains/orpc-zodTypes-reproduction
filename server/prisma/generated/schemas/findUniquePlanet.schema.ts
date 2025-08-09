import { z } from 'zod';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';

export const PlanetFindUniqueSchema = z.object({
  where: PlanetWhereUniqueInputObjectSchema,
});
