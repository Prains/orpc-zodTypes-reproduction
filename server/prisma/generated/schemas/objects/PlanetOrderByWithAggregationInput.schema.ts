import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlanetCountOrderByAggregateInputObjectSchema } from './PlanetCountOrderByAggregateInput.schema';
import { PlanetMaxOrderByAggregateInputObjectSchema } from './PlanetMaxOrderByAggregateInput.schema';
import { PlanetMinOrderByAggregateInputObjectSchema } from './PlanetMinOrderByAggregateInput.schema'

// prettier-ignore
const Schema = z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PlanetCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PlanetMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PlanetMinOrderByAggregateInputObjectSchema).optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const PlanetOrderByWithAggregationInputObjectSchema = Schema
