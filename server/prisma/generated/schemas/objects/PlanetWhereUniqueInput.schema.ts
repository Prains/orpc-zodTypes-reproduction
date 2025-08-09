import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PlanetWhereInputObjectSchema } from './PlanetWhereInput.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

// prettier-ignore
const Schema = z.object({
  AND: z.union([z.lazy(() => PlanetWhereInputObjectSchema), z.lazy(() => PlanetWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlanetWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlanetWhereInputObjectSchema), z.lazy(() => PlanetWhereInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const PlanetWhereUniqueInputObjectSchema = Schema
