import { initTRPC } from "@trpc/server"
import { CreateNextContextOptions } from "@trpc/server/adapters/next"
import { log } from "console"

/** @desc 封装一个上下文生成数据 */
export const createTRPCContext = (opts: CreateNextContextOptions) => {
  /** @desc getServerSession 是从 @/server/auth 中导入的，一般可以
   * 使用next-auth的getServerSession方法来获取用户信息
   */
  // 这里是模拟的
  return {
    user: {
      id: "1",
      name: "zono",
    },
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create()

export const trpcRouter = t.router({
  // Define your API routes here
  hello: t.procedure
    .use(async (opts: any) => {
      // op
      console.log("___中间件___opts前置")
      const res = await opts.next()
      console.log("___中间件___next后")
      return res
    })
    .query((opts) => {
      console.log("query opts")

      // console.log(opts.ctx) // 这里可以获取到上下文数据
      return "zono NB"
    }),
})

export type trpcRouterType = typeof trpcRouter
