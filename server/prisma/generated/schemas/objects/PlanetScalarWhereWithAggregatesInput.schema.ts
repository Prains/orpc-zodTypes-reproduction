import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

// prettier-ignore
const Schema = z.object({
  AND: z.union([z.lazy(() => PlanetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PlanetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlanetScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlanetScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PlanetScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const PlanetScalarWhereWithAggregatesInputObjectSchema = Schema
