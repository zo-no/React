/**
 * @Date        2024/09/23 15:10:04
 * @Author      zono
 * @Description 创建客户端
 * */
import { createTRPCClient, httpBatchLink } from "@trpc/client"

export const trpcClient = createTRPCClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
})
