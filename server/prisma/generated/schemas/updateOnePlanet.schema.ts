import { z } from 'zod';
import { PlanetUpdateInputObjectSchema } from './objects/PlanetUpdateInput.schema';
import { PlanetUncheckedUpdateInputObjectSchema } from './objects/PlanetUncheckedUpdateInput.schema';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';

export const PlanetUpdateOneSchema = z.object({
  data: z.union([
    PlanetUpdateInputObjectSchema,
    PlanetUncheckedUpdateInputObjectSchema,
  ]),
  where: PlanetWhereUniqueInputObjectSchema,
});
