import { os } from "@orpc/server";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import { PlanetFindManySchema } from "./prisma/generated/schemas";

const prisma = new PrismaClient();

export const UntypedClientList = os.input(PlanetFindManySchema).handler(async ({ input }) => {
  // Input IS typed here !!
  // But won't be typed in the client

  const planets = await prisma.planet.findMany(input);
  return planets;
});

export const TypedClientList = os.input(z.object({ id: z.string() })).handler(async ({ input }) => {
  // input IS typed here !!
  // and will be typed in the client

  const planets = await prisma.planet.findUnique({
    where: {
      id: input.id,
    },
  });

  return planets;
});

export const router = {
  planet: {
    list: UntypedClientList,
    get: TypedClientList,
  },
};
