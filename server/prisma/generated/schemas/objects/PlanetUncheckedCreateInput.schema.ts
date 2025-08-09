import { z } from 'zod';

const Schema = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const PlanetUncheckedCreateInputObjectSchema = Schema;
