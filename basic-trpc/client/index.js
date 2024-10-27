import { trpcClient } from "./trpcClient.js"

/** @desc 获取数据 */
trpcClient.userList.query().then((data) => {
  console.log(data)
})

/** @desc 创建数据 */
trpcClient.createUser
  .mutate({
    id: 1234,
    name: "张三",
    email: "zhangsan@example.com",
    age: 18,
  })
  .then((data) => {
    console.log(data)
  })
