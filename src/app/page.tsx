"use client"
import { useState, useEffect } from "react"
import { trpcClient } from "@/utils/trpcClient"

export default function Home() {
  const [msg, setMsg] = useState<string>("")
  useEffect(() => {
    trpcClient.hello.query().then((res) => {
      setMsg(res)
    })
  }, [])

  return <h1>接收到{msg}</h1>
}
