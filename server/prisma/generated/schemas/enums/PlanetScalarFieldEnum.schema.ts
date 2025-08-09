import { z } from 'zod';

export const PlanetScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'createdAt',
  'updatedAt',
]);
