import { z } from 'zod';

// prettier-ignore
export const PlanetInputSchema = z.object({
    name: z.string()
}).strict();

export type PlanetInputType = z.infer<typeof PlanetInputSchema>;
