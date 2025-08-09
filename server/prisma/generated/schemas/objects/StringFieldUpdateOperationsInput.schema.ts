import { z } from 'zod';

const Schema = z
  .object({
    set: z.string().optional(),
  })
  .strict();

export const StringFieldUpdateOperationsInputObjectSchema = Schema;
