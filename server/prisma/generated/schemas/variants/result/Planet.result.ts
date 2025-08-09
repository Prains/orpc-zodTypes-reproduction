import { z } from 'zod';

// prettier-ignore
export const PlanetResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PlanetResultType = z.infer<typeof PlanetResultSchema>;
