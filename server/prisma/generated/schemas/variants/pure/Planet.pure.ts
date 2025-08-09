import { z } from 'zod';

// prettier-ignore
export const PlanetModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type PlanetModelType = z.infer<typeof PlanetModelSchema>;
