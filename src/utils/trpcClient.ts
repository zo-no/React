import { createTRPCClient, httpBatchLink } from "@trpc/client"
import type { trpcRouterType } from "./trpcRouter"

export const trpcClient = createTRPCClient<trpcRouterType>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
})
