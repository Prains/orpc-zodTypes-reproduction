import { z } from 'zod';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';
import { PlanetCreateInputObjectSchema } from './objects/PlanetCreateInput.schema';
import { PlanetUncheckedCreateInputObjectSchema } from './objects/PlanetUncheckedCreateInput.schema';
import { PlanetUpdateInputObjectSchema } from './objects/PlanetUpdateInput.schema';
import { PlanetUncheckedUpdateInputObjectSchema } from './objects/PlanetUncheckedUpdateInput.schema';

export const PlanetUpsertSchema = z.object({
  where: PlanetWhereUniqueInputObjectSchema,
  create: z.union([
    PlanetCreateInputObjectSchema,
    PlanetUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PlanetUpdateInputObjectSchema,
    PlanetUncheckedUpdateInputObjectSchema,
  ]),
});
