import { z } from 'zod';

const Schema = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const PlanetMinAggregateInputObjectSchema = Schema;
