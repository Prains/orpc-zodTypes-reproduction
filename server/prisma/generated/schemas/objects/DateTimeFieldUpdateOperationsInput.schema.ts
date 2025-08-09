import { z } from 'zod';
import type { Prisma } from '@prisma/client';


// prettier-ignore
const Schema = z.object({
  set: z.coerce.date().optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const DateTimeFieldUpdateOperationsInputObjectSchema = Schema
