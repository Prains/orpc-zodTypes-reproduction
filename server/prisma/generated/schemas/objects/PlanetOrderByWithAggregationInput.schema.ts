import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlanetCountOrderByAggregateInputObjectSchema } from './PlanetCountOrderByAggregateInput.schema';
import { PlanetMaxOrderByAggregateInputObjectSchema } from './PlanetMaxOrderByAggregateInput.schema';
import { PlanetMinOrderByAggregateInputObjectSchema } from './PlanetMinOrderByAggregateInput.schema';

const Schema = z
  .object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    _count: z
      .lazy(() => PlanetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => PlanetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PlanetMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const PlanetOrderByWithAggregationInputObjectSchema = Schema;
