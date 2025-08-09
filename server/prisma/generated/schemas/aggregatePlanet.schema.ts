import { z } from 'zod';
import { PlanetOrderByWithRelationInputObjectSchema } from './objects/PlanetOrderByWithRelationInput.schema';
import { PlanetWhereInputObjectSchema } from './objects/PlanetWhereInput.schema';
import { PlanetWhereUniqueInputObjectSchema } from './objects/PlanetWhereUniqueInput.schema';
import { PlanetCountAggregateInputObjectSchema } from './objects/PlanetCountAggregateInput.schema';
import { PlanetMinAggregateInputObjectSchema } from './objects/PlanetMinAggregateInput.schema';
import { PlanetMaxAggregateInputObjectSchema } from './objects/PlanetMaxAggregateInput.schema'

export const PlanetAggregateSchema = z.object({ orderBy: z.union([PlanetOrderByWithRelationInputObjectSchema, PlanetOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanetWhereInputObjectSchema.optional(), cursor: PlanetWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PlanetCountAggregateInputObjectSchema ]).optional(), _min: PlanetMinAggregateInputObjectSchema.optional(), _max: PlanetMaxAggregateInputObjectSchema.optional() })