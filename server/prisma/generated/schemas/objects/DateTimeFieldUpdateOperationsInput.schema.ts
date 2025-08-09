import { z } from 'zod';

const Schema = z
  .object({
    set: z.coerce.date().optional(),
  })
  .strict();

export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema;
