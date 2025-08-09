import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

// prettier-ignore
const Schema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const PlanetCountOrderByAggregateInputObjectSchema = Schema
