import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const Schema = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
  })
  .strict();

export const PlanetMaxOrderByAggregateInputObjectSchema = Schema;
