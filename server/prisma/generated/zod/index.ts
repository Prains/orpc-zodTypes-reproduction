import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const PlanetScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PLANET SCHEMA
/////////////////////////////////////////

export const PlanetSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Planet = z.infer<typeof PlanetSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PLANET
//------------------------------------------------------

export const PlanetSelectSchema: z.ZodType<Prisma.PlanetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PlanetWhereInputSchema: z.ZodType<Prisma.PlanetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PlanetWhereInputSchema),z.lazy(() => PlanetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanetWhereInputSchema),z.lazy(() => PlanetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlanetOrderByWithRelationInputSchema: z.ZodType<Prisma.PlanetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanetWhereUniqueInputSchema: z.ZodType<Prisma.PlanetWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PlanetWhereInputSchema),z.lazy(() => PlanetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanetWhereInputSchema),z.lazy(() => PlanetWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const PlanetOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlanetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlanetCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlanetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlanetMinOrderByAggregateInputSchema).optional()
}).strict();

export const PlanetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlanetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PlanetScalarWhereWithAggregatesInputSchema),z.lazy(() => PlanetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlanetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlanetScalarWhereWithAggregatesInputSchema),z.lazy(() => PlanetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const PlanetCreateInputSchema: z.ZodType<Prisma.PlanetCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanetUncheckedCreateInputSchema: z.ZodType<Prisma.PlanetUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanetUpdateInputSchema: z.ZodType<Prisma.PlanetUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanetUncheckedUpdateInputSchema: z.ZodType<Prisma.PlanetUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanetCreateManyInputSchema: z.ZodType<Prisma.PlanetCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const PlanetUpdateManyMutationInputSchema: z.ZodType<Prisma.PlanetUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PlanetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlanetUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const PlanetCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlanetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlanetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PlanetMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlanetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PlanetFindFirstArgsSchema: z.ZodType<Prisma.PlanetFindFirstArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereInputSchema.optional(),
  orderBy: z.union([ PlanetOrderByWithRelationInputSchema.array(),PlanetOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanetScalarFieldEnumSchema,PlanetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlanetFindFirstOrThrowArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereInputSchema.optional(),
  orderBy: z.union([ PlanetOrderByWithRelationInputSchema.array(),PlanetOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanetScalarFieldEnumSchema,PlanetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanetFindManyArgsSchema: z.ZodType<Prisma.PlanetFindManyArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereInputSchema.optional(),
  orderBy: z.union([ PlanetOrderByWithRelationInputSchema.array(),PlanetOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlanetScalarFieldEnumSchema,PlanetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PlanetAggregateArgsSchema: z.ZodType<Prisma.PlanetAggregateArgs> = z.object({
  where: PlanetWhereInputSchema.optional(),
  orderBy: z.union([ PlanetOrderByWithRelationInputSchema.array(),PlanetOrderByWithRelationInputSchema ]).optional(),
  cursor: PlanetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlanetGroupByArgsSchema: z.ZodType<Prisma.PlanetGroupByArgs> = z.object({
  where: PlanetWhereInputSchema.optional(),
  orderBy: z.union([ PlanetOrderByWithAggregationInputSchema.array(),PlanetOrderByWithAggregationInputSchema ]).optional(),
  by: PlanetScalarFieldEnumSchema.array(),
  having: PlanetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PlanetFindUniqueArgsSchema: z.ZodType<Prisma.PlanetFindUniqueArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereUniqueInputSchema,
}).strict() ;

export const PlanetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlanetFindUniqueOrThrowArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereUniqueInputSchema,
}).strict() ;

export const PlanetCreateArgsSchema: z.ZodType<Prisma.PlanetCreateArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  data: z.union([ PlanetCreateInputSchema,PlanetUncheckedCreateInputSchema ]),
}).strict() ;

export const PlanetUpsertArgsSchema: z.ZodType<Prisma.PlanetUpsertArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereUniqueInputSchema,
  create: z.union([ PlanetCreateInputSchema,PlanetUncheckedCreateInputSchema ]),
  update: z.union([ PlanetUpdateInputSchema,PlanetUncheckedUpdateInputSchema ]),
}).strict() ;

export const PlanetCreateManyArgsSchema: z.ZodType<Prisma.PlanetCreateManyArgs> = z.object({
  data: z.union([ PlanetCreateManyInputSchema,PlanetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlanetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PlanetCreateManyAndReturnArgs> = z.object({
  data: z.union([ PlanetCreateManyInputSchema,PlanetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PlanetDeleteArgsSchema: z.ZodType<Prisma.PlanetDeleteArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  where: PlanetWhereUniqueInputSchema,
}).strict() ;

export const PlanetUpdateArgsSchema: z.ZodType<Prisma.PlanetUpdateArgs> = z.object({
  select: PlanetSelectSchema.optional(),
  data: z.union([ PlanetUpdateInputSchema,PlanetUncheckedUpdateInputSchema ]),
  where: PlanetWhereUniqueInputSchema,
}).strict() ;

export const PlanetUpdateManyArgsSchema: z.ZodType<Prisma.PlanetUpdateManyArgs> = z.object({
  data: z.union([ PlanetUpdateManyMutationInputSchema,PlanetUncheckedUpdateManyInputSchema ]),
  where: PlanetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PlanetUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PlanetUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PlanetUpdateManyMutationInputSchema,PlanetUncheckedUpdateManyInputSchema ]),
  where: PlanetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PlanetDeleteManyArgsSchema: z.ZodType<Prisma.PlanetDeleteManyArgs> = z.object({
  where: PlanetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;