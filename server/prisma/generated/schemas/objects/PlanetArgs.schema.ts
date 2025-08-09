import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PlanetSelectObjectSchema } from './PlanetSelect.schema'

// prettier-ignore
const Schema = z.object({
  select: z.lazy(() => PlanetSelectObjectSchema).optional()
}).strict();

 export const PlanetArgsObjectSchema = Schema
