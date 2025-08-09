import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PlanetOrderByWithRelationInputObjectSchema } from './objects/PlanetOrderByWithRelationInput.schema';
import { PlanetWhereInputObjectSchema } from './objects/PlanetWhereInput.schema';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';
import { PlanetScalarFieldEnumSchema } from './enums/PlanetScalarFieldEnum.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PlanetSelectSchema: z.ZodType<Prisma.PlanetSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PlanetSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PlanetFindFirstSchema: z.ZodType<Prisma.PlanetFindFirstArgs> = z.object({ select: PlanetSelectSchema.optional(),  orderBy: z.union([PlanetOrderByWithRelationInputObjectSchema, PlanetOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanetWhereInputObjectSchema.optional(), cursor: PlanetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlanetScalarFieldEnumSchema, PlanetScalarFieldEnumSchema.array()]).optional() }).strict();

export const PlanetFindFirstZodSchema = z.object({ select: PlanetSelectSchema.optional(),  orderBy: z.union([PlanetOrderByWithRelationInputObjectSchema, PlanetOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanetWhereInputObjectSchema.optional(), cursor: PlanetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlanetScalarFieldEnumSchema, PlanetScalarFieldEnumSchema.array()]).optional() }).strict();