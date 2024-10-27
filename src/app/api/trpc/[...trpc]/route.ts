import { createTRPCContext, trpcRouter } from "@/utils/trpcRouter"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { NextRequest } from "next/server"

export const runtime = "edge"

// Edge API Route handler
const handle = (request: NextRequest) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: trpcRouter,
    createContext: createTRPCContext as any,
  })
}

export { handle as GET, handle as POST }
