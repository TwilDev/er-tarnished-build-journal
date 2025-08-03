'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button, Input } from "@/components/ui"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return setError(error.message)
    router.push("/")
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-xl font-bold">Log In</h1>
      <Input
        placeholder="Email"
        className="mt-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        className="mt-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <Button className="mt-4 w-full" onClick={handleLogin}>
        Log In
      </Button>
    </div>
  )
}
