import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { t } from "./trpcSercer.js"

/** @desc
 * t.router()——路由
 * t.procedure()——具体函数
 */

const appRouter = t.router({
  userList: t.procedure.query(() => {
    /** @desc 从数据库拿数据 */
    // 定义一个名为users的数组，数组中包含一个对象
    const users = [
      {
        id: 123,
        name: "Alice",
        email: "alice@example.com",
        age: 30,
      },
      {
        id: 456,
        name: "Bob",
        email: "bob@example.com",
        age: 25,
      },
      {
        id: 789,
        name: "Charlie",
        email: "charlie@example.com",
        age: 35,
      },
      {
        id: 101,
        name: "David",
        email: "david@example.com",
        age: 28,
      },
      {
        id: 102,
        name: "Eve",
        email: "eve@example.com",
        age: 22,
      },
    ]

    console.log(users)

    return users
  }),
  createUser: t.procedure
    .input((val) => {
      /** @desc 接收数据 */
      return val
    })
    .mutation((opt) => {
      /** @desc 修改数据库 */
      console.log(opt)
      return "成功"
    }),
})

/** @desc 创建一个服务器 */
const server = createHTTPServer({
  router: appRouter,
})

/** @desc 服务器监听端口 */
server.listen(3000, () => {
  console.log("服务器启动了")
})
