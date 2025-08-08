import { createServer } from "node:http";
import { RPCHandler } from "@orpc/server/node";
import { CORSPlugin } from "@orpc/server/plugins";
import { router } from "./planet";
import type { RouterClient } from "@orpc/server";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";

const handler = new RPCHandler(router, {
  plugins: [new CORSPlugin()],
});

const server = createServer(async (req, res) => {
  const result = await handler.handle(req, res, {
    context: { headers: req.headers },
  });

  if (!result.matched) {
    res.statusCode = 404;
    res.end("No procedure matched");
  }
});

server.listen(3000, "127.0.0.1", () => console.log("Listening on 127.0.0.1:3000"));

const link = new RPCLink({
  url: "http://127.0.0.1:3000",
  headers: { Authorization: "Bearer token" },
});

export const orpc: RouterClient<typeof router> = createORPCClient(link);

// input IS not typed here !!
orpc.planet.list({});

// input IS typed here !!
orpc.planet.get({ id: "123" });
