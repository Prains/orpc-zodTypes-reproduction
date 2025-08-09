import { z } from 'zod';
import { PlanetWhereInputObjectSchema } from './PlanetWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

const Schema = z
  .object({
    id: z.string(),
    AND: z
      .union([
        z.lazy(() => PlanetWhereInputObjectSchema),
        z.lazy(() => PlanetWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlanetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlanetWhereInputObjectSchema),
        z.lazy(() => PlanetWhereInputObjectSchema).array(),
      ])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const PlanetWhereUniqueInputObjectSchema = Schema;
