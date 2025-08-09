import { z } from 'zod';
import { PlanetWhereInputObjectSchema } from './objects/PlanetWhereInput.schema';
import { PlanetOrderByWithAggregationInputObjectSchema } from './objects/PlanetOrderByWithAggregationInput.schema';
import { PlanetScalarWhereWithAggregatesInputObjectSchema } from './objects/PlanetScalarWhereWithAggregatesInput.schema';
import { PlanetScalarFieldEnumSchema } from './enums/PlanetScalarFieldEnum.schema'

export const PlanetGroupBySchema = z.object({ where: PlanetWhereInputObjectSchema.optional(), orderBy: z.union([PlanetOrderByWithAggregationInputObjectSchema, PlanetOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PlanetScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PlanetScalarFieldEnumSchema)  })