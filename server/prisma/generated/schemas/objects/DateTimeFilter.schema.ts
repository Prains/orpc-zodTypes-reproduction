import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema'

// prettier-ignore
const Schema = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const DateTimeFilterObjectSchema = Schema
