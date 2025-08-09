import { z } from 'zod';
import type { Prisma } from '@prisma/client';


// prettier-ignore
const Schema = z.object({
  set: z.string().optional()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const StringFieldUpdateOperationsInputObjectSchema = Schema
