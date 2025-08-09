import { z } from 'zod';
import type { Prisma } from '@prisma/client';


// prettier-ignore
const Schema = z.object({
  name: z.string()
}).strict();

 type __PrismaAlias = Prisma.JsonValue | Prisma.InputJsonValue;

 export const PlanetCreateManyInputObjectSchema = Schema
